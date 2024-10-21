import keyboard from '../assets/keyboard.jpg';
import monitor from '../assets/monitor.jpg';
import ssd from '../assets/ssd.jpg';
import powerbank from '../assets/powerbank.jpg';

let new_collections = [
  {
    id: 5,
    name: "Enhance your typing experience with our sleek and responsive keyboard.",
    image: keyboard,
    new_price: 3150.0,
    old_price: 2580.0,
    brand: "Panasonic",
    keyword: "keyboard",
  },
  {
    id: 6,
    name: "Ultra-slim monitor delivering vibrant visuals and exceptional clarity for any task",
    image: monitor,
    new_price: 2885.0,
    old_price: 1920.0,
    brand: "Apple",
    keyword: "monitor",
  },
  {
    id: 7,
    name: "Boost your system's performance with our lightning-fast SSD for rapid data access.",
    image: ssd,
    new_price: 3460.0,
    old_price: 3100.0,
    keyword: "ssd",
  },
  {
    id: 8,
    name: "Stay powered on the go with our portable power bank, designed for fast and reliable charging",
    image: powerbank,
    new_price: 3100.0,
    old_price: 2150.0,
    brand: "Dell",
    keyword: "powerbank",
  }
];

export default new_collections;
