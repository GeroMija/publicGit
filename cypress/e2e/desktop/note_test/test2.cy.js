require('@cypress/snapshots/snapshots').register()
it(`test2`, function() {
    cy.visit('https://uteka.ru').wait(1999)
        // cy.get('.header-main__inner')
        //     .screenshot({ 'name': '123' })
        // cy.get('.footer')
        //     .screenshot({ 'name': '123' })

    cy.log('first snapshot')
    cy.wrap({ foo: 12 }).snapshot()
    cy.log('second snapshot')
    cy.wrap({ bar: 101 }).snapshot({ 'name': 'ggg' })

});