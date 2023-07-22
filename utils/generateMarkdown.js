// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
if (license == "MIT"){
  //get MIT badge
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}
  

## Description
${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

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

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)

---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.


## Features

If your project has a lot of features, consider adding a heading called "Features" and listing them there.

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
