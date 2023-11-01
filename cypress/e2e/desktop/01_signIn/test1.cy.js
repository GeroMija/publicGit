it(`test1`, function() {

    cy.visitAuth('https://uteka.ru')
    cy.get('.header-main__right > [href="#"]')
        .click()
    cy.get('[data-test="ui-popup"]')

});