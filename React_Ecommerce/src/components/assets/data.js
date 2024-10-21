import headphone from '../assets/headphone.jpg';
import camera from '../assets/camera.jpg';
import earbuds from '../assets/earbuds.jpg';
import drone from '../assets/drone.jpg';

let data_product = [
  {
    id:1,
    name:"Premium wireless headphones with crystal-clear sound and all-day comfort",
    image:headphone,
    new_price:3450.00,
    old_price:2380.00,
    brand: "Panasonic",
    keyword: "headphone",
  },
  {id:2,
    name:"Capture every moment in stunning detail with our high-resolution digital camera",
    image:camera,
    new_price:2285.00,
    old_price:1420.00,
    brand: "Dell",
    keyword: "camera",
  },
  {id:3,
    name:"Compact and powerful, our wireless earbuds deliver immersive sound on the go",
    image:earbuds,
    new_price:3260.00,
    old_price:1900.00,
    brand: "Apple",
    keyword: "earbuds",
  },
  {id:4,
    name:"Explore the skies with our high-performance drone, perfect for capturing aerial shots.",
    image:drone,
    new_price:3100.00,
    old_price:2150.00,
    keyword: "drone",
  },
];

export default data_product;
