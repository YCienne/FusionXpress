// Importing images
import blender from '../assets/electronics/blender.jpg';
import bed1 from '../assets/bed/bed1.jpg';
import dress7 from '../assets/fashionimg/dress7.jpg';
// import dress8 from '../assets/fashionimg/dress8.jpg';
// import dress6 from '../assets/fashionimg/dress6.jpg';
import bracelet2 from '../assets/fashionimg/bracelet2.jpg';
// import men1 from '../assets/fashionimg/men1.jpg';
import men2 from '../assets/fashionimg/men2.jpg';
import all from '../assets/fashionimg/all.jpg';
import ladies1 from '../assets/fashionimg/ladies1.jpg';
// import ladies2 from '../assets/fashionimg/ladies2.jpg';
import house1 from '../assets/realestate/house1.jpg';
import lipstick from '../assets/beauty/lipstick.jpg';

// Categories using local images
export const categories = {
  CATEGORIES: [
    {
      title: "Fashion",
      image: all,  // local image from fashionimg
    },
    {
      title: "Beauty",
      image: lipstick,  // local image from beauty
    },
    {
      title: "Electronics",
      image: blender,  // local image from electronics
    },
    {
      title: "Home",
      image: bed1,  // local image from bed
    },
    {
      title: "Real Estate",
      image: house1,  // local image from realestate
    },
  ],
};

// Clothing object with direct image references
export const clothing = {
  FASHION: [
    {
      title: "Classic Men Shoes",
      price: "$2500",
      image: men2,  // Use imported image directly
    },
    {
      title: "Kate Spade Heels",
      price: "$700",
      image: ladies1,  // Use imported image directly
    },
    {
      title: "Fossil",
      price: "$10,000",
      image: watch1,  // Make sure to import 'watch1' if it's missing
    },
    {
      title: "Long Dress",
      price: "$450",
      image: dress7,  // Use imported image directly
    },
    {
      title: "Fenty Beauty Lipstick",
      price: "$100",
      image: lipstick,  // Use imported image directly
    },
    {
      title: "24carat Diamond Bracelet",
      price: "$60,000.00",
      image: bracelet2,  // Use imported image directly
    },
  ],
};

  
  
  
  
  
  
  
  
  
  
  
  
  