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

        const  {title, describe, installation, usage, guidelines, test, license, gitHub, email} = response;

myReadMe();
        function myReadMe(title, describe, installation, usage, guidelines, test, license, gitHub, email) {

            var userReadMe = `<!doctype html>
            <html lang="en">
              <head>
                <!-- Required meta tags -->
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
            
                <!-- Bootstrap CSS -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            
                <title>Profile Information</title>
              </head>
              <body>
                <h1>Hello, world!</h1>
            
                <div class="container">
                  <div class="row row-cols-1">
                    <div class="col">Name:${title} </div>
                    <div class="col">Location:${describe} </div>
                    <div class="col">Bio: ${installation}</div>
                    <div class="col">Linkedin URL:${usage}</div>
                    <div class="col">GitHub URL:${gitHub}</div>
                  </div>
                </div>
            
                
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            
                
              </body>
            </html>`
        
            fs.writeFile('myReadMe.md', userReadMe, (err) =>
                err ? console.error(err) : console.log('Success!')
            );

        }
    })

