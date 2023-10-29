let s = require('../../../storage/data_selectors.json')
describe(`Create_new_message`, function() {
    let note = 'Hello world!';
    it(`Create standart new message and open`, function() {
        cy.createNewNote({ 'note': note })
        cy.getNote({ 'open': true, 'note': note })
    });
    it(`Create standart new message and reject to open later`, function() {
        cy.createNewNote({ 'note': note })
        cy.getNote({ 'rejection': true, 'note': note, 'reopen': true })
        cy.getNote({ 'open': true, 'note': note })
    });
    it(`Create standart new message reopen old note`, function() {
        cy.createNewNote({ 'note': note })
        cy.getNote({ 'open': true, 'note': note, 'reopen': true })
    });

});