# GitReadMeGo

## Decription

GitReadMeGo is a project that wll automatically generate a userReadMe.md document for you.  When you run the application it will ask you multiple questions.  Based on the questions, your answers will be written automatically on the right location. The application will also ask for your information which also be rendered as a link.  If you have any license, the badge and license information will also be rendered.  

Here is the link to my website.  Feel free to share with your friends and family.

[https://emil1577.github.io/GitReadMeGo](https://github.com/Emil1577/GitReadMeGo)

## Installation Instructions

First you need to clone my repository. Go to https://github.com/Emil1577/GitReadMeGo.  Then run your terminal on the folder of the cloned repository.  You'll also need to install the npm by writing "npm install'.  This will generate "node_modules" folder.  You also need to run "npm init", this will then create "package.json". After which is you are ready to use the application.

## Table Of Contents

1. [Webpage Screenshot](#webpage-screenshots)
2. [Code Snippets](#code-snippets)
3. [How to use:](#how-to-use)
4. [Test Instruction](#test-instruction)
5. [My Contact Information](#my-contact-information)

## Webpage Screenshots:

![Screen Shot 2023-01-23 at 11 18 46 PM](https://user-images.githubusercontent.com/119825000/214233156-a40beaca-44ff-4441-9bea-f5016d87e9b4.png)
![Screen Shot 2023-01-23 at 10 28 34 PM](https://user-images.githubusercontent.com/119825000/214226276-8fa4e9a0-45e4-484c-8726-1ebb8fa5e2a7.png)
![Screen Shot 2023-01-23 at 10 29 44 PM](https://user-images.githubusercontent.com/119825000/214226287-8ebdae14-e068-453a-b409-ae979d34cb94.png)


## Code Snippets: 

### Function inquire prompt.

const fs = require('fs')
const inquirer = require('inquirer')

    // Prompt function for question and answer
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your Project Title',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Please describe your project',
                name: 'describe'
            },
            {
                type: 'input',
                message: 'Please provide installation instruction',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'Please provide how to use your project',
                name: 'usage'
            },
            {
                type: 'input',
                message: 'Please provide contribution guidelines',
                name: 'guidelines'
            },
            {
                type: 'input',
                message: 'Please provide test instruction',
                name: 'test'
            },
            {
                type: 'list',
                message: 'Please choose a license',
                name: 'license',
                choices: ['MIT', 'Mozilla', 'IBM', 'none'],
            },
            {
                type: 'input',
                message: 'Please enter your Github username',
                name: 'gitHub'
            },
            {
                type: 'input',
                message: 'Please enter your email address',
                name: 'email'
            },
        ])

### Function to generate variables based on the answers.

      .then((response) => {
          console.log(response)

          const licenses = require('./utils/generateMarkdown') // links the generateMarkdown.js so we can exchange data.

          licenses.generateMarkdown(response.license); //  generateMarkDown to trigger multiple functions

         // console.log(urlLink)

          const { title, describe, installation, usage, guidelines, test, license, gitHub, email } = response;  //assigning constant 

          myReadMe(response);
          function myReadMe() {

              var userReadMe = `# ${title}    ${urlLinkBadge}
              
          fs.writeFile('userReadMe.md', userReadMe, (err) =>
                err ? console.error(err) : console.log('Success!')

    
### Function to renderLicense Badge.  The function is similar to rendering the link and "License" section.

      function renderLicenseBadge(license) {

          if (license.includes(license)) {

              if (license.includes('MIT')) {

                  urlLinkBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
              }
              else if (license.includes('Mozilla')) {

                  urlLinkBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`

              } else if (license.includes('IBM')) {

                  urlLinkBadge = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`

              } else { urlLinkBadge = "" }

          }
      }


### Function to generate the license.

        function generateMarkdown(license) {

            renderLicenseBadge(license)
            renderLicenseLink(license)
            renderLicenseSection(license)
        }

## How to use:

After completing the installation instruction, on the same terminal just type in "node index.js" then enter. The terminal will then ask you multiple questions.  After completing each questions, it will then create a new file called "userReadMe.md".  This file is generated based on the answers provided.

Here's a short video on how to use. https://drive.google.com/file/d/14vYBx3EbTVbQUL8TV-Yj-ptR9qHmb5Jk/view

## Test Instruction:

To test the application, please go to the folder of the cloned repository.  Check for a file named "userReadMe.md", if it's there check and see if the file is correctly created with the answers you provided. If you are successfull, this means you are able to use the app correctly.


## My Contact Information:

* [My LinkedIn](https://www.linkedin.com/in/emil-ronquillo-76832a32/)
* [My Github](https://github.com/Emil1577)
* [My Email](mailto:emilronquillo@gmail.com)

## Thank you for stopping by. 

Special thanks to all my Instructor, tutors and my colleagues
