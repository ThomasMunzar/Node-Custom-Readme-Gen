// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none" || null){
   return `!* [![License](https://img.shields.io/badge/licence-${license}-blue.svg)]
   (https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return "";
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLiscenseBadge(data.license)}
  # ${data.title}
  
## Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [Tests](#tests)
* [License](#license)

## Description
${data.description}

## Installation
${data.installations}
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage
${data.usage}
Provide instructions and examples for use. Include screenshots as needed.


## Credits
${data.credits}
List your collaborators, if any, with links to their GitHub profiles.

## Questions
If you have any further questions please contact me.
 - Name: ${data.fullname}
 - Email: ${data.email}
 - Github: [${data.username}](https://github.com/${data.username}/)

## License
 This project is using the ${data.license} license.

## Contributing
${data.contributing}
## Tests
${data.tests}
Go the extra mile and write tests for your application. Then provide examples on how to run them.

---



 
`;
// inject the stuff like "data.username" and so one..
}

module.exports = generateMarkdown;
// this function is being exported (just the generateMarkdown function) (can import this function and put it in index.js (MAYBE))
