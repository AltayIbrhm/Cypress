
describe('checkboxes Testing',()=>{


    it('checkboxes Test',()=>{
        cy.visit('http://practice.cybertekschool.com/checkboxes')


        cy.get('#box1').check().should('be.checked')

        cy.wait(1000)
        cy.get('[name="checkbox2"]').click().should('not.be.checked')


    })





})