import { Handshake, SofaIcon } from "lucide-react";




const K = {
    NAVLINKS: [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/About"
        },
        {
            name: "Collection",
            path: "/Collection"
        },
        {
            name: "Contact Us",
            path: "/ContactUs"
        },

    ],

    SERVICES: [
        {
            title: "Amazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icon: <Handshake />,
            bgColor: "#F5EBEB",
            iconBg: "#CB9696",

        },
        {
            title: "Quality Furniture",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icon: <SofaIcon />,
            bgColor: "#DCEBDD",
            iconBg: "#8BBD8E",

        },
        {
            title: "Modern Design",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icon: <SofaIcon />,
            bgColor: "#F5EFD8",
            iconBg: "#D1B54A",

        },
        {
            title: "Best Support",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icon: <HeadsetIcon />,
            bgColor: "#F4E6D8",
            iconBg: "#D29A61"

        }

    ]


};
export default K;