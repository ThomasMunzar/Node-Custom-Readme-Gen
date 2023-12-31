// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none" || null) {
    return `[![License](https://img.shields.io/badge/licence-${license}-blue.svg)]`;
  } else {
    return "";
  }

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}
  
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
${data.installation}


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
 This project is covered under the ${data.license} license.

 [${data.license}](opensource.org/license/${data.license}/)

## Contributing
${data.contributing}
## Tests
${data.tests}


---



 
`;
  // inject the stuff like "data.username" and so one..
}

module.exports = generateMarkdown;
// this function is being exported (just the generateMarkdown function) (can import this function and put it in index.js (MAYBE))
