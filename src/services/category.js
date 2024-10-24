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
import fryer1 from '../assets/electronics/fryer1.jpg';
import fridge1 from '../assets/electronics/fridge1.jpg';
import blender3 from '../assets/electronics/blender3.jpg';
import fan1 from '../assets/electronics/fan1.jpg';
import blender1 from '../assets/electronics/blender1.jpg';
import bed7 from '../assets/bed/bed7.jpg';
import bed9 from '../assets/bed/bed9.jpg';
import bed10 from '../assets/bed/bed10.jpeg';
import bed2 from '../assets/bed/bed2.jpg';

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

  
  
  
  
  
  
  
  
  
  
  
  
  
  export const beauty = {
    MAKEUP: [
      {
        title: "Nike Airforce 1",
        price: "$1,000.00",
        image:
          ,
      },
      {
        title: "Polo Shirts (4 pcs)",
        price: "$100.00",
        image:
          ,
      },
      {
        title: " Italian Blouse (Green)",
        price: "$10.00",
        image:
          ,
      },
      {
        title: "Gold bracelet",
        price: "$20,000,.00",
        image:
          ,
      },
      {
        title: "Plain Glasses",
        price: "$15.00",
        image:
          ,
      },
    ],
  };
  
  
  
  
  
  
  
  
  
  
  export const blender = {
    ELECTRONICS: [
      {
        title: "Original fryer",
        price: "$50",
        image:fryer1,
      },
      {
        title: "Modern Fridge",
        price: "$300",
        image:fridge1,
      },
      {
        title: "Quality Blender ",
        price: "$70.00",
        image:blender3,
      },
      {
        title: "Fan",
        price: "$100",
        image:fan1,
      },
      {
        title: "Two In One Blender",
        price: "$250",
        image:blender1,
      },
    ],
  };
  
  
  
  
  
  
  
  export const bed = {
    HOME: [
      {
        title: "Affordable Bed",
        price: "$400",
        image:bed9,
      },
      {
        title: "Latest bed",
        price: "$500",
        image:bedroom,
      },
      {
        title: "Quality Bed",
        price: "$350",
        image: bed10,
      },
      {
        title: "Bed",
        price: "$120",
        image:bed7,
      },
      {
        title: "Bed",
        price: "$70",
        image:bed2,
      },
    ],
  };
  
  
  
  
  
  
  
  
  export const rent = {
    HOUSES: [
      {
        title: "Audi RS5 2014",
        price: "$40,000.00",
        image:,
      },
      {
        title: "Mercedes E-class 2018",
        price: "$70,000.00",
        image:,
      },
      {
        title: "BMW E30 1998",
        price: "$100,000.00",
        image: ,
      },
      {
        title: "pigeot 504 1970",
        price: "$300,000,.00",
        image:,
      },
      {
        title: "Audi RS5 2014",
        price: "$40,000.00",
        image:,
      },
    ],
  };