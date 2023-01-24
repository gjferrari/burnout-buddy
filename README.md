# BurnOutBuddy
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Description](#description)
* [User Story](#user-story)
* [Install](#install)
* [Contribution](#contribution)
* [Usage](#usage)
* [Testing](#testing)
* [Questions](#questions)
* [Visuals](#visuals)
* [License](#license)
* [Deployed](#deployed)
* [Acceptance Criteria](acceptance-criteria)

## Description
This project features a built from scratch, high quality deployed to Heroku example of collaborative work following a MVC paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.<br/>

## User Story
I AM a person who is working on personal wellness<br/>
WHO WANTS a 5-30 minute activity<br/>
WHO WANTS to select an activity by time<br/>
WHO WANTS to record and store their feelings before the mindful, movement, outreach, distract, create, or restful activities.
SO THAT they can achieve healthy self care skills
AND SO THAT they can share their wellness journey with community support.

## Install
When building this app we installed the [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie, [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication,  [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for our Views, used the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for our Models, and create an Express.js API for our Controllers, and [Hands-On-Table](https://handsontable.com/docs/javascript-data-grid/installation/) for new technology discoverd outside of class lecture. USERS WILL ONLY NEED TO USE THE BROWSER TO ACCESS AND USE OUR BURNOUT BUDDY APP.<br/>

## Contribution
This assignment was worked on by students: [Claire Bain](claire.bain3@gmail.com) on the Front End Development, [Mathew Chandler](cascabelrock@gmail.com) on the Back End Development, [Nicole Cohen](nicolerosee19@gmail.com) on the Front End Development, [Genevieve Ferrari](genferrari@gmail.com) on the Back End Development, and [Marta Wambaugh](marwambaugh@gmail.com) as Project Manager and Content Creator. With the support of our teaching assistant's and tutors, the students also used universal resources such as YouTube, GitHub.com, StackOverflow.com, and our class resources. Many thanks to those who continue to support our learning in the technological community.<br/>

## Usage
This BurnoutBuddy App is intended to aid those struggling with work or personal "burnout" signs and symptoms. Our targeted user might know their available time, (5, 10, 15, 20, or 30 minutes) and be looking for a wellness activity/article that could lead to an improved quality of life. The journal or "check-in" feature allows the user to record and reflect on their progress and share their completed wellness works with peers also using the application. The sense of accountability and competitiveness we believe aids to our user's progress in their journey of wellness.<br/>

## Testing
For our BurnoutBuddy application we tested our code with [Insomnia](https://insomnia.rest/).<br/>

## Questions
Please reach out to Burnout Buddy Developers though their GitHub or via E-mail with any questions or concerns you may have!<br/>

Claire Bain<br/>
claire.bain3@gmail.com<br/>
[Claire Bain](https://github.com/clairebain3)<br/>

Mathew Chandler<br/>
cascabelrock@gmail.com<br/>
[Mathew-Chandler's-GitHub](https://github.com/Stingxming)<br/>

Nicole Cohen<br/>
nicolerosee19@gmail.com<br/>
[Nicole-Cohen's-Github](https://github.com/nrose19)<br/>

Genevieve Ferrari<br/>
genferrari@gmail.com<br/>
[Genevieve-Ferrari's-GitHub](https://github.com/gjferrari)<br/>

Marta Wambaugh<br/>
marwambaugh@gmail.com <br/>
[Marta-Wambaugh's-GitHub](https://github.com/mwambaugh)<br/>

# Visuals
[Login-Page-Screenshot-Screenshot](./assets/loginPageScreenshot.jpg)<br/>
[Length-Of-Activity-Quiz-Screenshot](./assets/timeQuizScreenshot.jpg)<br/>
[Activity-Cards-Screenshot](./assets/activitiesScreenshot.jpg)<br/>

## License
MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br/>

## Deployed
[Click-Here-For-Our-Live-URL](https://burnout-buddy.herokuapp.com/)<br/>
[Click-Here-For-Our-GitHub-Repository](https://github.com/gjferrari/burnout-buddy)<br/>

## Project Requirements
* Use Node.js and Express.js to create a RESTful API.<br/>
* Use Handlebars.js as the template engine.<br/>
* Use MySQL and the Sequelize ORM for the database.<br/>
* Have both GET and POST routes for retrieving and adding new data.<br/>
* Use at least one new library, package, or technology that we haven’t discussed.<br/>
* Have a folder structure that meets the MVC paradigm.<br/>
* Include authentication (express-session and cookies).<br/>
* Protect API keys and sensitive information with environment variables.<br/>
* Be deployed using Heroku (with data).<br/>
* Have a polished UI.<br/>
* Be responsive.<br/>
* Be interactive (i.e., accept and respond to user input).<br/>
* Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).<br/>
* Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).<br/>