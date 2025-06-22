
function getConfig() { 
    return {
        imageBaseUrl: "public/Config-Images/",
        preloadImages: true,
        fields: [
            {
                id: "FRAME-COLOUR",
                label: "Frame Colour",
                imageLayerOrder: 1,
                displayType: "Color",
                options: [
                    {
                    id: "CURTIS-RAL-7015",
                    label: "RAL 7015",
                    color: "#434750",
                    imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },
                    {
                        id: "CURTIS-RAL-8001",
                        label: "RAL 8001",
                        color: "#A06527",
                        imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },
                    {
                        id: "CURTIS-RAL-5024",
                        label: "RAL 5024",
                        color: "#5A9BA4",
                        imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },
                    {
                        id: "CURTIS-RAL-5002",
                        label: "RAL 5002",
                        color: "#2A2F6A",   
                        imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },
                    {
                        id: "CURTIS-RAL-5015",
                        label: "RAL 5015",
                        color: "#2B8CC4",
                        imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },
                    {
                        id: "CURTIS-RAL-6018",
                        label: "RAL 6018",
                        color: "#6DB54D",
                        imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },
                    {
                        id: "CURTIS-RAL-6009",
                        label: "RAL 6009",
                        color: "#3F4A3C",
                        imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },
                    {
                        id: "CURTIS-RAL-6019",
                        label: "RAL 6019",
                        color: "#D4EDC9",
                        imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },
                    {
                        id: "CURTIS-RAL-3003",
                        label: "RAL 3003",
                        color: "#8B1C1C",
                        imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },
                    {
                        id: "CURTIS-RAL-3001",
                        label: "RAL 3001",
                        color: "#A1231B",
                        imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },
                    {
                        id: "CURTIS-RAL-3013",
                        label: "RAL 3013",
                        color: "#A23520",
                        imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },
                    {
                        id: "CURTIS-RAL-4004",
                        label: "RAL 4004",
                        color: "#6C1E3F",
                        imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },
                    {
                        id: "CURTIS-RAL-1007",
                        label: "RAL 1007",
                        color: "#F0AC00",
                        imageUrl: "Frames/Curtis-Bikes-AM9-2023-5-of-13.png"
                    },

                ]

               
            },
            {

                    id: "FORK-SELECTION",
                    label: "Fork Selection",
                    imageLayerOrder: 0,
                    displayType: "Text",
                    options: [
                        {
                            id: "F-34-Fac",
                            label: "Fox 34 Factory",
                            imageUrl: "Forks/FOX-34-Factory.png",
                            price: 1000
                        },
                        {
                            id: "F-36-Fac",
                            label: "Fox 36 Factory",
                            imageUrl: "Forks/FOX-36-Factory.png",
                            price: 1200
                        },
                        {
                            id: "F-38-Fac",
                            label: "Fox 38 Factory",
                            imageUrl: "Forks/FOX-38-Factory.png",
                            price: 1300
                        },
                        {
                            id: "RS-Lyric-Ult",
                            label: "RockShox Lyrik Ultimate",
                            imageUrl: "Forks/RS-Lyric-Ult.png",
                            price: 1100
                        },
                        {
                            id:"RS-Pike-Ult",
                            label: "RockShox Pike Ultimate",
                            imageUrl: "Forks/RS-Pike-Ult.png",
                            price: 1200
                        },
                        {
                            id: "RS-ZEB-Ult",
                            label: "RockShox ZEB Ultimate",
                            imageUrl: "Forks/RS-ZEB-Ult.png",
                            price: 1400
                        },

                        
                    
                       
                    
                    ]


            },

            {
                id: "WHEEL-FRONT",
                label: "Front Wheel",
                imageLayerOrder: -1,
                displayType: "Text",
                options: [
                    {
                        id: "Hope-Fortus-Front-30W-29",
                        label: "Hope Fortus Front 30W 29",
                        imageUrl: "Wheels/Front/29/Hope-Fortus-Front-30W-29.png",
                        price: 500
                    },
                    
                ]
            },

            {
                id: "WHEEL-REAR",
                label: "Rear Wheel",
                imageLayerOrder: -1,
                displayType: "Text",
                options: [
                    {
                        id: "Hope-Fortus-Rear-30W-29",
                        label: "Hope Fortus Rear 30W 29",
                        imageUrl: "Wheels/Rear/29/Hope-Fortus-Rear-30W-29.png",
                        price: 600
                    },
                    
                ]
            },

            {
                id: "SEATPOST",
                label: "Seatpost",
                imageLayerOrder: -1,
                displayType: "Text",
                options: [
                    {
                        id: "Fox-Transfer-Neo",
                        label: "Fox Transfer Factory",
                        imageUrl: "Seatposts/Fox-Transfer-Neo.png",
                        price: 400
                    },
                    {
                        id: "RockShox-Reverb-AXS",
                        label: "RockShox Reverb AXS",
                        imageUrl: "Seatposts/Rockshox-Reverb-Axs.png",
                        price: 500
                    },
                   
                ]
            }
            
        ]
    }
}