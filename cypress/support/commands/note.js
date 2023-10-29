let s = require('../../storage/data_selectors.json')

Cypress.Commands.add('createNewNote', (info) => {
    cy.visitAuth(`${Cypress.env('CY_BASE_URL')}`);
    cy.get(s.input.textarea)
        .type(info.note);
    cy.get(s.btn.encryptNote)
        .click().wait('@create').then(note => {
            let body = note.response.body;
            assert.isOk(body.has_coincidence === false,
                `Expected coincidence: false. Actual: ${body.has_coincidence}`);
            assert.isOk(body.password === null,
                `Expected password: null. Actual: ${body.password}`)
        });
});

Cypress.Commands.add('getNote', (info) => {
    console.log(info.open)
    if (info.open)
        cy.get(s.section.createdNode).find(s.input.noteLink).then(link => {
            let url = link[0].value
            cy.visit(url);
            cy.get(s.section.confirmReadNote).find(s.btn.confirmButton)
                .click();
            cy.get(s.section.okContent)
                .contains(info.note).should('be.visible')
        });
});