let s = require('../../../storage/data_selectors.json')
describe(`01_auth_old_user `, function() {
    it(`auth_old_user`, function() {
        cy.visitAuth(`${Cypress.env('CY_BASE_URL')}`)
    });
});