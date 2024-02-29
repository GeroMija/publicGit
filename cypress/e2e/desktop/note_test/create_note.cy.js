let note = `Hello world! ${new Date()}`;

describe(`Create_new_message`, function() {

    it(`Create standart new message and open`, function() {
        cy.createNewNote({ 'note': note })
        cy.getNote({ 'open': true, 'note': note })
    });

    it(`Create standart new message and reject to open later`, function() {
        cy.createNewNote({ 'note': note })
        cy.getNote({ 'rejection': true, 'note': note, 'reopen': true })
    });

    it(`Create standart new message reopen old note`, function() {
        cy.createNewNote({ 'note': note })
        cy.getNote({ 'open': true, 'note': note, 'reopen': true })
    });

});