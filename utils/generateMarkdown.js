// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  if (license === "MIT") {
    link = "https://opensource.org/licenses/MIT";
  } else if (license === "Mozilla Public License 2.0") {
    link = "https://opensource.org/licenses/MPL-2.0";
  } else if (license === "The Unlicense") {
    link = "https://opensource.org/licenses/unlicense";
  } else {
    link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under ${license}, for more information please visit`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Questions](#questions)

### Description:
${data.description}

### Installation
${data.installation}

### Usage
${data.usage}

### License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}

### Contribution
${data.contribution}

### Test Instructions
${data.tests}

### Questions? 
Please feel free to contact me if you need any further information:
* Email: ${data.email}
* Github Profile: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
