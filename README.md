# SweetShopTesting

## About the Project
**SweetShopTesting** is an automated testing project designed to validate the functionality of the SweetShop website using **Cypress**.

## Requirements
- **Node.js** (recommended version 18+)
- **npm** or **yarn**
- **Cypress**

## Installation

To install the required dependencies, run the following command:

```bash
npm install cypress --save-dev
```

## Project Structure

Project directory structure:
```
SweetShopTesting/
│-- cypress/
│   ├── integration/     # Test files
│   │   ├── home.spec.js # Homepage tests
│   │   ├── login.spec.js # Login tests
│   ├── fixtures/        # Test data
│   ├── support/         # Custom commands & utilities
│-- cypress.json         # Cypress configuration file
│-- package.json         # Dependencies and npm commands
│-- README.md            # This file
```

## Example Test

Create a file `cypress/integration/home.spec.js` and add the following test:

```javascript
describe('Homepage title validation', () => {
  it('Should have the correct title', () => {
    cy.visit('https://sweetshop.com');
    cy.title().should('include', 'Sweet Shop');
  });
});
```

## Running Tests

To open the Cypress Test Runner:

```bash
npx cypress open
```

To run tests in headless mode:

```bash
npx cypress run
```

To run a specific test file:

```bash
npx cypress run --spec "cypress/integration/home.spec.js"
```

## Useful Tools
- **Cypress Dashboard** (for test analytics and reporting)
- **Cypress Fixtures** (for managing test data)
- **Custom Commands** (extend Cypress functionality)

## License
This project is for learning and testing purposes.
