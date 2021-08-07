import coffeeShop from '../assets/coffeeshop.png';
import coffee from '../assets/coffee.svg';
import Twitter from '../assets/twitterbg.png';
import twit from '../assets/twitter-icon.svg';
import disneybg from '../assets/disneynow.png';
import mickey from '../assets/mickey.svg';
import suca from "../assets/sucah.png";
import house from "../assets/house.svg";

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

export const HouseProject = {
  title: "SuCasa",
  details:
    "SuCasa is a fullstack real estate marketplace created with React JS, Express JS and MongoDB.This project utilizes GraphQL in querying the API endpoint. The database schema includes Locations and Apartments which exists in a one to one and many to one relationship. Locations and Apartments can be queried, updated and deleted with  queries and mutations defined in the schema.js file. Apollo client is used in the frontend to retrieve the models from MongoDB and rendered on the frontend. This project can be extended to include an admin dashboard where new apartments and locations can be added,updated or deleted since the logic for that has already been implemented on the backend.",
  tools: [
    "GraphQL",
    "expressjs",
    "reactjs",
    "fullstack",
    "tailwind-css",
    "mongodb",
    "apollo-client",
    "mutations",
  ],
  projecturl: "https://sucasa.netlify.app/",
  github:"https://github.com/DTGlov/SuCasa",
  img:suca,
  icon:house,
};