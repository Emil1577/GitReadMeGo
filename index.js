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
    //generating data based on the answers/response
    .then((response) => {
        console.log(response)

        const licenses = require('./utils/generateMarkdown') // links the generateMarkdown.js so we can exchange data

        licenses.generateMarkdown(response.license); // triggers generateMarkDown to trigger multiple functions

       // console.log(urlLink)

        const { title, describe, installation, usage, guidelines, test, license, gitHub, email } = response;  //assigning constant 

        myReadMe(response);
        function myReadMe() {

            var userReadMe = `# ${title}    ${urlLinkBadge}

## Decription
### ${describe}
###
###

## Table Of Contents            
1. [Installation](#installation)
2. [Usage](#usage)
3. [Guidelines](#contributing)
4. [Test](#tests)
5. [Questions](#questions)

## Installation
### ${installation}
            
## Usage
### ${usage}


## Contributing
### ${guidelines}

## Tests
### ${test}
     
## Questions:
            
* [My Github](https://github.com/${gitHub})
* [My Email](mailto:${email})

${licenseTab}
${urlLink}

            
### Special thanks to all my Instructor, tutors and my colleagues`



            // Function to write the readme file.
            fs.writeFile('userReadMe.md', userReadMe, (err) =>
                err ? console.error(err) : console.log('Success!')
            );

        }
    })

