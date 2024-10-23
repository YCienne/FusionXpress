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

  
  
  
  
  
  export const fashion = {
    FASH: [
      {
        title: "Nike Airforce 1",
        price: "$1,000.00",
        image:
          "https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024",
      },
      {
        title: "Polo Shirts (4 pcs)",
        price: "$100.00",
        image:
          "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/544113/1.jpg?1982",
      },
      {
        title: " Italian Blouse (Green)",
        price: "$10.00",
        image:
          "https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dwd500a72e/images/large/21_20001000008_1.jpg?sw=594&sh=761&sm=cut",
      },
      {
        title: "Gold bracelet",
        price: "$20,000,.00",
        image:
          "https://ae01.alicdn.com/kf/Sd7a55c56f28249c293097a5c5689a854C.jpg_960x960.jpg",
      },
      {
        title: "Plain Glasses",
        price: "$15.00",
        image:
          "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/0585922/1.jpg?4547",
      },
    ],
  };
  
  
  
  
  
  
  
  
  
  
  export const furniture = {
    FURNISH: [
      {
        title: "Nike Airforce 1",
        price: "$1,000.00",
        image:
          "https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024",
      },
      {
        title: "Polo Shirts (4 pcs)",
        price: "$100.00",
        image:
          "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/544113/1.jpg?1982",
      },
      {
        title: " Italian Blouse (Green)",
        price: "$10.00",
        image:
          "https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dwd500a72e/images/large/21_20001000008_1.jpg?sw=594&sh=761&sm=cut",
      },
      {
        title: "Gold bracelet",
        price: "$20,000,.00",
        image:
          "https://ae01.alicdn.com/kf/Sd7a55c56f28249c293097a5c5689a854C.jpg_960x960.jpg",
      },
      {
        title: "Plain Glasses",
        price: "$15.00",
        image:
          "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/0585922/1.jpg?4547",
      },
    ],
  };
  
  
  
  
  
  
  
  export const spareParts = {
    PARTS: [
      {
        title: "Audi RS5 2014",
        price: "$40,000.00",
        image:
          "https://carfax-img.vast.com/carfax/v2/-8672953507659361787/1/344x258",
      },
      {
        title: "Mercedes E-class 2018",
        price: "$70,000.00",
        image:
          "https://images.clickdealer.co.uk/vehicles/3522/3522456/large1/74597681.jpg",
      },
      {
        title: "BMW E30 1998",
        price: "$100,000.00",
        image: "https://live.staticflickr.com/65535/8353678885_ef73bfb6e0_b.jpg",
      },
      {
        title: "pigeot 504 1970",
        price: "$300,000,.00",
        image:
          "https://res.cloudinary.com/hcckzx7wm/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_600,q_80,w_800/c_fill,h_600,w_800/uzu3in2o4gp5eppqthml4xhixo77?pgw=1&pgwact=1",
      },
      {
        title: "Audi RS5 2014",
        price: "$40,000.00",
        image:
          "https://carfax-img.vast.com/carfax/v2/-8672953507659361787/1/344x258",
      },
    ],
  };
  
  
  
  
  
  
  
  
  export const property = {
    PROPERTY: [
      {
        title: "Audi RS5 2014",
        price: "$40,000.00",
        image:
          "https://carfax-img.vast.com/carfax/v2/-8672953507659361787/1/344x258",
      },
      {
        title: "Mercedes E-class 2018",
        price: "$70,000.00",
        image:
          "https://images.clickdealer.co.uk/vehicles/3522/3522456/large1/74597681.jpg",
      },
      {
        title: "BMW E30 1998",
        price: "$100,000.00",
        image: "https://live.staticflickr.com/65535/8353678885_ef73bfb6e0_b.jpg",
      },
      {
        title: "pigeot 504 1970",
        price: "$300,000,.00",
        image:
          "https://res.cloudinary.com/hcckzx7wm/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_600,q_80,w_800/c_fill,h_600,w_800/uzu3in2o4gp5eppqthml4xhixo77?pgw=1&pgwact=1",
      },
      {
        title: "Audi RS5 2014",
        price: "$40,000.00",
        image:
          "https://carfax-img.vast.com/carfax/v2/-8672953507659361787/1/344x258",
      },
    ],
  };