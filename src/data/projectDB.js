import coffeeShop from '../assets/coffeeshop.png';
import coffee from '../assets/coffee.svg';
import Twitter from '../assets/twitterbg.png';
import twit from '../assets/twitter-icon.svg';
import disneybg from '../assets/disneynow.png';
import mickey from '../assets/mickey.svg';

export const firstProject = {
  title: "CoffeeShop",
  details:
    "Fullstack coffee shop built with the MERN stack. Includes customer registration and authentication, Google Authentication,Redux and Redux thunk to manage the state of cart items,Protected Routes to prevent access to certain routes if a token does not exist, admin registration and login and an Admin Dashboard to add/edit and delete products. This web app has all the features of an ecommerce shop with the exception of payment.",
  tools: [
    "reactjs",
    "redux",
    "express",
    "googleauth",
    "mogodb",
    "protected-routes",
    "jwt",
    "tailwind",
    "framer-motion",
    "bcrypt-js",
    "heroku",
    "netlify",
    "redux-thunk",
  ],
  projecturl: "https://coffeeshop-me.netlify.app/",
    github: "https://github.com/DTGlov/CoffeeShop",
    img: coffeeShop,
  icon:coffee
};

export const secondProject = {
  title: "Twitter Clone",
  details:
    "Twitter clone built with React Js and utilizes firebase as a backend service. Features include Tweet functionality and User Authentication.",
  tools: [
    "reactjs",
    "firebase-auth",
    "firebase-firestore",
    "tailwind",
    "protected-routes",
    "bcrypt-js",
    "netlify",
    "context-api",
  ],
  projecturl: "https://twitter-clony.netlify.app/",
  github: "https://github.com/DTGlov/twitter-clone",
  img: Twitter,
  icon: twit,
};

export const thirdProject = {
  title: "Disney Now",
  details:
    "This is a UI clone of the Disney Now Web App all-shows section disneynow.com/all-shows. This project was built to solidify my knowlegde in CSS GRID, FLEXBOX and RESPONSIVE DESIGN. This project was built with React Js and SCSS. ",
  tools: [
    "reactjs",
    "grid",
    "flexbox",
    "responsive-design",
    "keyframes",
    "css",
    "netlify",
    "frontend-development"
  ],
  projecturl: "https://disney-now.netlify.app/",
  github: "https://github.com/DTGlov/disney-now",
  img: disneybg,
  icon: mickey,
};
