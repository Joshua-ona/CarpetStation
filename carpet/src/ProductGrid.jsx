import ProductCard from "./ProductCard";
//import from center
import bella from "./center/bella.jpeg";
import bw from "./center/bw.jpeg";
import Cream from "./center/Cream.jpeg";
import Grey from "./center/Grey.jpeg";
import Harmonisilk from "./center/silk.jpeg";
import luvi from "./center/luvi.jpeg";
import luvib from "./center/luvib.jpeg";
import offelya from "./center/offelya.jpeg";
import Primeshaggy from "./center/shag.jpeg";
import Redshaggy from "./center/red shaggy.jpeg";
import Sahra from "./center/Sahra.jpeg";
import vizion from "./center/Vizion.jpeg";
//import from wall to wall
import black from "./walltowall/black.jpeg"
import blue from "./walltowall/blue.jpeg"
import BRW from "./walltowall/brown-white.jpeg"
import maroon from "./walltowall/marron.jpeg"
import red from "./walltowall/red.jpeg"
import sky from "./walltowall/sweet blue.jpeg"
import greyish from "./walltowall/greyish.jpeg"
//import from grass
import balcony from "./grass/balcony.jpeg"
import corridor from "./grass/corridor.jpeg"
import grass from "./grass/grass.jpeg"
import pitch from "./grass/pitch.jpeg"

//import from corridor
import bwy from "./corridor/bw.jpeg"
import grey from "./corridor/grey.jpeg"
import redy from "./corridor/red.jpeg"
import star from "./corridor/star.jpeg"


const data = {
    "Wall-to-Wall": [
        { id: 1, name: "Bella", color: "Black", img: black },
        { id: 2, name: "Bella", color: "Blue", img: blue },
        { id: 3, name: "Brown and White", color: "brown", img: BRW },
        { id: 4, name: "Bella", color: "Maroon", img: maroon },
        { id: 5, name: "Bella", color: "Red", img: red },
        { id: 6, name: "Bella", color: "Blue", img: sky },
        { id: 7, name: "Bella", color: "Grey", img: greyish },
    ],
    "Centre Carpets": [
        { id: 8, name: "Bella", color: "Red", img: bella },
        { id: 9, name: "B&W", color: "Black and white", img: bw },
        { id: 10, name: "Prime Shaggy", color: "Black", img: Primeshaggy },
        { id: 11, name: "Prime Shaggy", color: "Cream", img: Cream },
        { id: 12, name: "Prime Shaggy", color: "Grey", img: Grey },
        { id: 13, name: "Harmoni Silk", color: "Grey", img: Harmonisilk },
        { id: 14, name: "Luvi", color: "Red", img: luvi },
        { id: 15, name: "Luvi", color: "Red", img: luvib },
        { id: 16, name: "Offelya", color: "Beige", img: offelya },
        { id: 17, name: "Shaggy", color: "Red", img: Redshaggy },
        { id: 19, name: "Sahra", color: "Grey", img: Sahra },
        { id: 20, name: "Prime Shaggy", color: "Vizion", img: vizion },

    ],
    "Grass Carpet": [
        { id: 21, name: "Balcony", color: "Green", img: balcony },
        { id: 22, name: "Pathway ", color: "Green", img: corridor },
        { id: 23, name: "Turf", color: "Green", img: grass },
        { id: 24, name: "Shade", color: "Green", img: pitch },
    ],
    "Corridor Carpets": [
        { id: 25, name: "Diamonds", color: "Black and White", img: bwy },
        { id: 26, name: "Welcome rug", color: "Black", img: grey },
        { id: 27, name: "Flowers", color: "Maroon", img: redy },
        { id: 28, name: "Versache", color: "Red", img: star },
    ]
};

export default function ProductGrid({ category, setSelectedImage }) {
    return (
        <div className="grid">
            {data[category].map((item) => (
                <ProductCard key={item.id} item={item} onClick={setSelectedImage} />
            ))}
        </div>
    );
}
