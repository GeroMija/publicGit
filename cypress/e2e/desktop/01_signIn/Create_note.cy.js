let s = require('../../../storage/data_selectors.json')
describe(`Create_new_message`, function() {
    let note = 'Hello world!';
    it(`Create standart new message`, function() {
        cy.intercept('post', '**/note/create**').as('create')
        cy.createNewNote({ 'note': note })
        cy.getNote({ 'open': true, 'note': note })
    });
});