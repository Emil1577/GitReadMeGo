// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



function renderLicenseBadge(license) {

    if (license.includes(license)) {

        if (license.includes('MIT')) {

            urlLinkBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
        }
        else if (license.includes('Mozilla')) {
    
            urlLinkBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
    
        } else if (license.includes('IBM')) {
    
            urlLinkBadge = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`
    
        } else { urlLinkBadge = ""}

    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if (license.includes('MIT')) {

        urlLink = `## License

## https://opensource.org/licenses/MIT`
    }
    else if (license.includes('Mozilla')) {

        urlLink = `## License.

## https://opensource.org/licenses/MPL-2.0`

    } else if (license.includes('IBM')) {

        urlLink = `## License.

## https://opensource.org/licenses/IPL-1.0`

    } else {  urlLink = ""}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(license) {

    renderLicenseBadge(license)
    renderLicenseLink(license)
    renderLicenseSection(license)

    // console.log(response.license);
}


module.exports = { generateMarkdown }


