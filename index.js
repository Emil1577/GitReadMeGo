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
            message: 'Please provide usage information',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelins',
            name: 'guidelines'
        },
        {
            type: 'input',
            message: 'Please provide test instruction',
            name: 'test'
        },
        {
            type: 'checkbox',
            message: 'Please choose a license',
            name: 'license',
            choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
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

        const { title, describe, installation, usage, guidelines, test, license, gitHub, email } = response;

        myReadMe(title, describe, installation, usage, guidelines, test, license, gitHub, email);
        function myReadMe() {

            var userReadMe = `# ${title}

            ## Decription
            ### ${describe}

            ## Table Of Contents
            
            1: [Webpage Screenshot](https://github.com/Emil1577/Weather-Weather/blob/main/README.md#webpage-screenshots)
            2: [How to use:](https://github.com/Emil1577/Weather-Weather/blob/main/README.md#how-to-use)
            3: [My Contact Information](https://github.com/Emil1577/Weather-Weather/blob/main/README.md#my-contact-information)
            
            [https://emil1577.github.io/Weather-Weather](https://emil1577.github.io/Weather-Weather/)

            ## Installation
            ###${installation}
            
            ## Usage
            ### ${usage}


            ## Guidelines
            ### ${guidelines}

            ## Test
            ### ${test}


            
            
            ## How to use:
        
    
            ## My Contact Information:
            
            * [My LinkedIn](https://www.linkedin.com/in/emil-ronquillo-76832a32/)
            * [My Github](https://github.com/${gitHub})
            * [My Email](mailto:${email})
            
            ## Thank you for stopping by. 
            
            Special thanks to all my Instructor, tutors and my colleagues`




            fs.writeFile('myReadMe.md', userReadMe, (err) =>
                err ? console.error(err) : console.log('Success!')
            );

        }
    })

