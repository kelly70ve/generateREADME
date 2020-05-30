function generateMarkdown(data) {
return `
# ${data.title}

## Description 
${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 
${data.installation}


## Usage
${data.usage}


## License
![license](https://img.shields.io/badge/license-${data.license.replace(" ", "%20")}-brightgreen)

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions? 
* Please email me if you have any questions at ${data.email}
* OR visit my [GitHub](https://github.com/${data.username}): 
* [![${data.username}](https://github.com/${data.username}.png)](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
