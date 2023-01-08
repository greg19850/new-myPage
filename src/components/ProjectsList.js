import hangman from "../img/portfolioProjects/hangman.png";
import etch from "../img/portfolioProjects/etch-a-sketch.png";
import rockPaperScissors from "../img/portfolioProjects/rock-paper-scissors.png";
import slotMachine from "../img/portfolioProjects/slot-machine-OOP.png";
import toDoApp from "../img/portfolioProjects/to-do-list-react.png";
import cinemaBook from "../img/portfolioProjects/cinema-ticket-booking.png";
import formValidation from "../img/portfolioProjects/form-validation.png";
import mealFinder from "../img/portfolioProjects/meal-finder-API.png";
import rateExchange from "../img/portfolioProjects/rate-exchange-calculator-API.png";
import arrayMethods from "../img/portfolioProjects/DOM-Array-methods.png";
import expenseTracker from "../img/portfolioProjects/expense-tracker.png";
import singlePageApp from "../img/portfolioProjects/SPA.png";
import myNotes from "../img/portfolioProjects/myNotes.png";
import myPage from "../img/portfolioProjects/Greg M Page.png"

import { SiCss3, SiHtml5, SiJavascript, SiReact, SiGithub, SiNetlify, SiNodedotjs } from 'react-icons/si';
import { TbApi, TbBrandVercel } from "react-icons/tb";


const cssIco = <SiCss3 className="tech-icon css" />;
const htmlIco = <SiHtml5 className="tech-icon html" />;
const javaScriptIco = <SiJavascript className="tech-icon javascript" />;
const reactIco = <SiReact className="tech-icon react" />;
const gitHubIco = <SiGithub className="tech-icon github" />;
const netlifyIco = <SiNetlify className="tech-icon netlify" />;
const nodeJsIco = <SiNodedotjs className="tech-icon node" />;
const apiIco = <TbApi className="tech-icon api" />;
const vercelIco = <TbBrandVercel className="tech-icon vercel" />;

const ProjectsList = [
  {
    id: 1,
    link1: "https://my-personal-page-gm.vercel.app/",
    link2: "https://github.com/greg19850/my-page",
    icon1: "WWW",
    icon2: "Github",
    img: myPage,
    title: "My Portfolio Page Retro Style",
    text: "My personal page, made in retro game style from 1980's. I created this page as an original portfolio page, but decided to change style, however it's worth checking my original page as it has few different, interesting solutions.",
    technologies: [reactIco, htmlIco, cssIco, javaScriptIco, gitHubIco, vercelIco],
  },
  {
    id: 2,
    link1: "https://form-validator-beige.vercel.app/",
    link2: "https://github.com/greg19850/Form-Validator",
    icon1: "WWW",
    icon2: "Github",
    img: formValidation,
    title: "Form with Validation",
    text: "Simple form with fields like: username / login / password / password confirmation. Each field has it's own validation rules, without all fields being correctly validated form can't be submitted. ",
    technologies: [htmlIco, cssIco, javaScriptIco, gitHubIco, vercelIco],
  },
  {
    id: 3,
    link1: "https://hangmann-game.netlify.app/",
    link2: "https://github.com/greg19850/Hangman",
    icon1: "WWW",
    icon2: "Github",
    img: hangman,
    title: "Hangman Game",
    text: "Personal project of classic Hangman game. Player needs to guess hidden word, any missed letter results in another part of hangman come up on screen. Game ends when full hangman. Desktop only app, keyboard required. Project made in HTML, CSS, and pure Vanilla JavaScript.",
    technologies: [htmlIco, cssIco, javaScriptIco, gitHubIco, netlifyIco]
  },
  {
    id: 4,
    link1: "https://movie-tickets-booking-vert.vercel.app/",
    link2: "https://github.com/greg19850/Movie-Tickets-Booking",
    icon1: "WWW",
    icon2: "Github",
    img: cinemaBook,
    title: "Cinema Ticket Booking",
    text: "Cinema tickets booking app. Pick seats for one of available films. Some seats are already taken, and can't be picked. Project made in pure Vanilla JavaScript, HTML and CSS, with use of local storage. Seats selection, and tickets price don't reset, after refreshing page.",
    technologies: [htmlIco, cssIco, javaScriptIco, gitHubIco, vercelIco],
  },
  {
    id: 5,
    link1: "https://etch-a-sketch-gm.vercel.app/",
    link2: "https://github.com/greg19850/Etch-a-Sketch",
    icon1: "WWW",
    icon2: "Github",
    img: etch,
    title: "Etch-A-Sketch",
    text: "Desktop only! Project made as part of “The Odin Project” course. Digital version of classic etch-a-sketch toy. Choice of grid size, drawing in black, multicolour, or colour of own choice.",
    technologies: [htmlIco, cssIco, javaScriptIco, gitHubIco, vercelIco],
  },
  {
    id: 6,
    link1: "https://to-do-app-gm.vercel.app/",
    link2: "https://github.com/greg19850/to-do-app-final",
    icon1: "WWW",
    icon2: "Github",
    img: toDoApp,
    title: "React To Do List",
    text: "To Do list made in React.js, using React Hooks. Main goal of this project was to practice creating apps in React. Created task can be either edited, deleted, or marked as complete. Tasks can also be filtered (display of active, complete or all tasks). App createdwith React.js and CSS.",
    technologies: [reactIco, cssIco, nodeJsIco, gitHubIco, vercelIco],
  },

  {
    id: 7,
    link1: "https://rock-paper-scissorss-gm.netlify.app/",
    link2: "https://github.com/greg19850/Rock-Paper-Scissors",
    icon1: "WWW",
    icon2: "Github",
    img: rockPaperScissors,
    title: "Rock Paper Scissors Game",
    text: "Another classic, well-known game. Play against AI, with wins losses and draws kept on the scoreboard.  Project in HTML, CSS, and pure Vanilla JavaScript.",
    technologies: [htmlIco, cssIco, javaScriptIco, gitHubIco, netlifyIco],
  },

  {
    id: 8,
    link1: "https://meal-finder-gm.netlify.app/",
    link2: "https://github.com/greg19850/Meal-Finder",
    icon1: "WWW",
    icon2: "Github",
    img: mealFinder,
    title: "Meal Finder App",
    text: "Find desired meal by inputting foods name (e.g., steak) and all dishes options will appear on screen, or by clicking on random meal finder button. Every meal has list of ingredients and prep instructions. App use themealdb.com fetch API, done in Vanilla JavaScript, HTML and CSS.",
    technologies: [htmlIco, cssIco, javaScriptIco, gitHubIco, netlifyIco],
  },
  {
    id: 9,
    link1: "https://rate-exchange-calculator-gm.vercel.app/",
    link2: "https://github.com/greg19850/Rate-Exchange-Calculator",
    icon1: "WWW",
    icon2: "Github",
    img: rateExchange,
    title: "Exchange Rate Calculator",
    text: "Exchange rate app, which use latest exchange rates thanks to exchangerate-api.com fetch API. Multiple of currencies to choose from. Main goal of project was to get familiar with use of 3rd party API's and making requests. Created in HTML, CSS and Vanilla JavaScript.",
    technologies: [htmlIco, cssIco, javaScriptIco, apiIco, gitHubIco, vercelIco],
  },
  {
    id: 10,
    link1: "https://expense-tracker-gm.vercel.app/",
    link2: "https://github.com/greg19850/Expense-Tracker",
    icon1: "WWW",
    icon2: "Github",
    img: expenseTracker,
    title: "Expense Tracker",
    text: "Tracking income and expenses, as well as total balance. Color code for both categories. Data saved in local storage, after page reload, input data is not removed. In this project big part played high order array methods, like map, filter or reduce. in Vanilla JavaScript, HTML and CSS.",
    technologies: [htmlIco, cssIco, javaScriptIco, gitHubIco, vercelIco],
  },
  {
    id: 11,
    link1: "https://dom-array-methods-gm.netlify.app/",
    link2: "https://github.com/greg19850/DOM-Array-Methods",
    icon1: "WWW",
    icon2: "Github",
    img: arrayMethods,
    title: "DOM Array Methods",
    text: "Simple app using most important and useful array methods: foreach, filter, map, sort & reduce. App use randomuser.me fetch API. Created with use of Vanilla JavaScript, HTML and CSS.",
    technologies: [htmlIco, cssIco, javaScriptIco, apiIco, gitHubIco, netlifyIco],
  },
  {
    id: 12,
    link1: "https://spa-example-page.netlify.app/",
    link2: "https://github.com/greg19850/spa-project2",
    icon1: "WWW",
    icon2: "Github",
    img: singlePageApp,
    title: "Single Page Application",
    text: "Example of a landing page made in React.js. Single Page Application with use of React Router. No real content on page, only example articles, created to test correct functionality of SPA.",
    technologies: [htmlIco, cssIco, javaScriptIco, reactIco, nodeJsIco, gitHubIco, netlifyIco],
  },
  {
    id: 13,
    link1: "https://my-notes-gm.vercel.app/",
    link2: "https://github.com/greg19850/my-notes",
    icon1: "WWW",
    icon2: "Github",
    img: myNotes,
    title: "My Notes",
    text: "My notes app. 3 notes categories, each category differ with note colour. Option of deleting one note at a time, or all at ones.  Created in HTML, CSS, and pure Vanilla JavaScript.",
    technologies: [htmlIco, cssIco, javaScriptIco, gitHubIco, vercelIco],
  },
  {
    id: 14,
    link1: "https://slot-machine-gm.netlify.app/",
    link2: "https://github.com/greg19850/Slot-Machine-OOP",
    icon1: "WWW",
    icon2: "Github",
    img: slotMachine,
    title: "Slot Machine",
    text: "Slot machine game made with Vanilla JavaScript, Object Oriented Programming way. Graphically app is very simple, not much CSS used, as in this project main goal was to focus on exercising OOP, functionality of program was the main key.",
    technologies: [htmlIco, cssIco, javaScriptIco, gitHubIco, netlifyIco],
  },

];

export default ProjectsList;