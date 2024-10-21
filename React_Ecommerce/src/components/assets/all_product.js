import headphone from '../assets/headphone.jpg';
import camera from '../assets/camera.jpg';
import earbuds from '../assets/earbuds.jpg';
import drone from '../assets/drone.jpg';
import keyboard from '../assets/keyboard.jpg';
import monitor from '../assets/monitor.jpg';
import ssd from '../assets/ssd.jpg';
import powerbank from '../assets/powerbank.jpg';


let all_product = [
  {
    id: 1,
    name: "Premium wireless headphones with crystal-clear sound and all-day comfort",
    image: headphone,
    new_price: 3450.00,
    old_price: 2380.00,
    brand: "Panasonic",
    keyword: "headphone",
    category: "Gadgets",
    keywords: ["premium", "wireless", "headphones", "crystal-clear", "sound", "comfort", "gadgets", "Panasonic", "2380"],
    rating: 4 // Add the rating here
  },
  {
    id: 2,
    name: "Capture every moment in stunning detail with our high-resolution digital camera",
    image: camera,
    new_price: 2285.00,
    old_price: 1420.00,
    brand: "Dell",
    keyword: "camera",
    category: "Gadgets",
    keywords: ["capture", "digital", "camera", "high-resolution", "gadgets", "Dell", "1420"],
    rating: 3 // Add the rating here
  },
  {
    id: 3,
    name: "Compact and powerful, our wireless earbuds deliver immersive sound on the go",
    image: earbuds,
    new_price: 3260.00,
    old_price: 1900.00,
    brand: "Apple",
    keyword: "earbuds",
    category: "Gadgets",
    keywords: ["compact", "wireless", "earbuds", "immersive", "sound", "gadgets", "Apple", "1900"],
    rating: 4 // Add the rating here
  },
  {
    id: 4,
    name: "Explore the skies with our high-performance drone, perfect for capturing aerial shots.",
    image: drone,
    new_price: 3100.00,
    old_price: 2150.00,
    keyword: "drone",
    category: "Gadgets",
    keywords: ["drone", "high-performance", "aerial", "shots", "gadgets", "2150"],
    rating: 2 // Add the rating here
  },
  {
    id: 5,
    name: "Enhance your typing experience with our sleek and responsive keyboard.",
    image: keyboard,
    new_price: 3150.0,
    old_price: 2580.0,
    brand: "Panasonic",
    keyword: "keyboard",
    category: "Accessories",
    keywords: ["typing", "keyboard", "responsive", "sleek", "accessories", "Panasonic", "2580"],
    rating: 3 // Add the rating here
  },
  {
    id: 6,
    name: "Ultra-slim monitor delivering vibrant visuals and exceptional clarity for any task",
    image: monitor,
    new_price: 2885.0,
    old_price: 1920.0,
    brand: "Apple",
    keyword: "monitor",
    category: "Accessories",
    keywords: ["ultra-slim", "monitor", "vibrant", "visuals", "clarity", "accessories", "Apple", "1920"],
    rating: 4 // Add the rating here
  },
  {
    id: 7,
    name: "Boost your system's performance with our lightning-fast SSD for rapid data access.",
    image: ssd,
    new_price: 3460.00,
    old_price: 3100.00,
    keyword: "ssd",
    category: "Accessories",
    keywords: ["performance", "lightning-fast", "ssd", "accessories", "3100"],
    rating: 1 // Add the rating here
  },
  {
    id: 8,
    name: "Stay powered on the go with our portable power bank, designed for fast and reliable charging",
    image: powerbank,
    new_price: 3100.00,
    old_price: 2150.00,
    brand: "Dell",
    keyword: "powerbank",
    category: "Accessories",
    keywords: ["portable", "powerbank", "charging", "fast", "reliable", "accessories", "Dell", "2150"],
    rating: 2 // Add the rating here
  }
];



export default all_product;

