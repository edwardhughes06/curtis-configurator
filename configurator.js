(function () {
    "use strict";

    // Helper: encode option indices as a base36 string
    function encodeBuild(fields, selectedOptions) {
        let code = '';
        for (const field of fields) {
            const idx = field.options.findIndex(opt => selectedOptions[field.id] && selectedOptions[field.id].id === opt.id);
            // Use 0 if not found
            code += idx >= 0 ? idx.toString(36) : '0';
        }
        return code;
    }

    // Helper: decode base36 string to option indices
    function decodeBuild(fields, code) {
        const indices = [];
        for (let i = 0; i < fields.length; ++i) {
            const char = code[i] || '0';
            indices.push(parseInt(char, 36) || 0);
        }
        return indices;
    }

    // Helper: update URL with build code
    function updateUrlBuild(code) {
        const url = new URL(window.location);
        if (code && code.match(/[0-9a-z]+/i)) {
            url.searchParams.set('b', code);
        } else {
            url.searchParams.delete('b');
        }
        // Remove all other field params
        for (const key of Array.from(url.searchParams.keys())) {
            if (key !== 'b') url.searchParams.delete(key);
        }
        window.history.replaceState({}, '', url);
    }

    document.addEventListener('alpine:init', () => {
        Alpine.data('configurator', () => ({
            fields: [],
            images: [],
            selectedOptions: [],
            imagesLoaded: false,
            openFieldId: '',

            async init() {
                const vm = this;

                const config = getConfig();
                const fields = config.fields;

                // Read build code from URL
                const buildCode = new URLSearchParams(window.location.search).get('b');
                let buildIndices = [];
                if (buildCode) {
                    buildIndices = decodeBuild(fields, buildCode);
                }

                for (let i = 0; i < fields.length; ++i) {
                    const field = fields[i];
                    let selectedOption = field.options[0];
                    if (buildIndices.length > i && field.options[buildIndices[i]]) {
                        selectedOption = field.options[buildIndices[i]];
                    }
                    this.setSelectedOption(field, selectedOption);

                    for (const option of field.options) {
                        if (option.imageUrl) {
                            option.imageUrl = config.imageBaseUrl + option.imageUrl;
                        }
                        if (option.iconUrl) {
                            option.iconUrl = config.imageBaseUrl + option.iconUrl;
                        }
                    }
                }

                if (config.preloadImages) {
                    vm.preloadImages(fields);
                } else {
                    console.log('Images Loaded');
                    vm.imagesLoaded = true;
                }

                vm.openFieldId = fields[0].id;
                vm.fields = fields;

                vm.updateVisibility();
                vm.updateImages();

                // Sync URL on load
                vm.syncSelectionsToUrl();

                // Add buyNow handler to window for Alpine
                window.buyNow = () => {
                    const code = encodeBuild(vm.fields, vm.selectedOptions);
                    const price = vm.totalPrice;
                    window.location.href = `checkout.html?b=${encodeURIComponent(code)}&p=${encodeURIComponent(price)}`;
                };

                // Stripe payment handler is now loaded from stripe-handler.js
            },

            selectOption(field, option) {
                const vm = this;
                vm.setSelectedOption(field, option);

                vm.updateVisibility();
                vm.updateImages();
                vm.syncSelectionsToUrl();
            },

            syncSelectionsToUrl() {
                const vm = this;
                const code = encodeBuild(vm.fields, vm.selectedOptions);
                updateUrlBuild(code);
            },

            getSelectedOption(field) {
                const vm = this;
                return vm.selectedOptions[field.id];
            },

            setSelectedOption(field, option) {
                const vm = this;
                vm.selectedOptions[field.id] = option;
            },

            updateVisibility() {
                const vm = this;

                for (const field of vm.fields) {
                    if (field.visibleWhen) {
                        const expr = field.visibleWhen.split("=");
                        const fieldId = expr[0];
                        const optionId = expr[1];

                        const selectedOption = vm.selectedOptions[fieldId];
                        if (selectedOption.id == optionId) {
                            field.visible = true;
                        } else {
                            field.visible = false;
                        }
                    } else {
                        field.visible = true;
                    }
                }
            },

            updateImages() {
                const vm = this;
                const newImages = [];

                for (const field of vm.fields.filter(x => x.visible)) {
                    const option = vm.getSelectedOption(field);
                    if (option.imageUrl) {

                        let url = option.imageUrl;
                        for (const fieldId in vm.selectedOptions) {
                            url = url.replace('$' + fieldId, vm.selectedOptions[fieldId].id);
                        }

                        const image = { url: url, zIndex: field.imageLayerOrder };
                        newImages.push(image);
                    }
                }

                vm.images = newImages;
            },

            preloadImages(fields) {
                const vm = this;
                let imagesLoadedCount = 0;
                const imageUrls = [];

                for (const field of fields) {
                    for (const option of field.options) {
                        if (option.imageUrl) {
                            imageUrls.push(option.imageUrl);
                        }

                        if (option.iconUrl) {
                            imageUrls.push(option.iconUrl);
                        }
                    }
                }

                for (const imageUrl of imageUrls) {
                    const img = new Image;
                    img.onload = function () {
                        imagesLoadedCount++;
                        if (imagesLoadedCount === imageUrls.length) {
                            vm.imagesLoaded = true;
                            console.log(imagesLoadedCount + ' images preloaded');
                        }
                    }
                    img.onerror = function (e) {
                        console.error('Failed to load image:', imageUrl, e);
                    }
                    img.src = imageUrl;
                }
            },

            isTextField(field) {
                if (!field.displayType) {
                    return true;
                }

                return field.displayType.toLowerCase() == 'text';
            },

            isColorField(field) {
                if (!field.displayType) {
                    return false;
                }

                return field.displayType.toLowerCase() == 'color';
            },

            isImageField(field) {
                if (!field.displayType) {
                    return false;
                }

                return field.displayType.toLowerCase() == 'image';
            },

            get totalPrice() {
                let total = 0;
                for (const field of this.fields) {
                    const option = this.getSelectedOption(field);
                    if (option && option.price) {
                        total += option.price;
                    }
                }
                return total;
            },

            
        }))
    })
}());