
describe('Web Elements',()=>{


    it('First Test',()=>{


    //tag name
    cy.get('input')

    //by ID
    cy.get('#inputField-123')
    cy.get('#yellow')

    //by className
    cy.get('.input-full-width')
    cy.get('.radio')

    //By attribute name
    cy.get('[placeholder]')

    //by attribute name and value
    cy.get('[placeholder=Email]')

    //by class value
    cy.get('[class="input-full-width size medium shape-rectangle"]')

    //by tag name and attribute with value
    cy.get('input [placeholder=Email]')
    cy.get('input [type="radio"]')

    // by two different attributes or more 
    cy.get('[placeholder=Email][type="email"]#inputField-123#yellow')

    cy.contains('Blue').click()

    

})




})