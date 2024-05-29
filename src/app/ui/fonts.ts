import { Lato, Barlow_Semi_Condensed, Barlow } from 'next/font/google';
 
export const lato = Lato(
    { 
        weight: "400",
        subsets: ["latin"]
    }
);

export const barlow_semi_condensed = Barlow_Semi_Condensed(
    { 
        weight: ["400", "500"],
        subsets: ["latin"]
    }
);

export const barlow = Barlow(
    { 
        weight: ["400", "500"],
        subsets: ["latin"]
    }
);