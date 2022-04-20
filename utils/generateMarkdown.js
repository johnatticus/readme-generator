// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === "APACHE 2.0") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === "GPL 3.0") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === "BSD 3") {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license === "None") {
    return '[![License]("")'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "None") {
      return `### License
      
      This project is licensed under ${license}.`;
    } else {
      return ""
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// DID NOT USE THIS FUNCTION
// function renderLicenseSection(license) {
//   if (license !== "None") {
//     return `## License
    
//     Project made with ${license}`
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}

 ### by ${data.name}

  ---

  ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}

  ---  
  ## Description

  * ${data.description}
---
## Installation, Tests & Usage

**Dependenchies required(installed):** ${data.dependencies}

**Test Commands:** ${data.tests}

**Other Info:** ${data.whattoknow}

---

## Contributions

${data.contribution}

---

## Questions
**Github account:** [${data.username}](https://github.com/${data.username})

**E-Mail:** [${data.email}](mailto:${data.username})
`;
}

module.exports = generateMarkdown;