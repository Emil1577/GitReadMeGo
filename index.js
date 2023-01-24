const fs = require('fs')
const inquirer = require('inquirer')
const { title } = require('process')


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
            choices: ['MIT', 'Mozilla', 'IBM'],
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

    .then((response) => {
        console.log(response)

        const licenses = require('./utils/generateMarkdown')
       // if (response.license.includes('HTML')){}

        console.log(licenses.generateMarkdown(response.license));
         
        console.log(urlLink)
        // console.log(HTML)
        
        const { title, describe, installation, usage, guidelines, test, license, gitHub, email } = response;

        myReadMe(response);
        function myReadMe() {

            var userReadMe = `# ${title}

## Decription
### ${describe}
###
###

## Table Of Contents            
1. [Installation](#installation)
2. [Usage](#usage)
3. [Guidelines](#guidelines)
4. [Test](#test)
5. [How to Use](#how-to-use)
6. [Contact Information](#my-contact-information)

## Installation
### ${installation}
            
## Usage
### ${usage}


## Guidelines
### ${guidelines}

## Test
### ${test}


            
            
## How to use:
        
    
## My Contact Information:
            
* [My Github](https://github.com/${gitHub})
* [My Email](mailto:${email})
            
## License.

## ${urlLink}

            
Special thanks to all my Instructor, tutors and my colleagues`




            fs.writeFile('myReadMe.md', userReadMe, (err) =>
                err ? console.error(err) : console.log('Success!')
            );

        }
    })

