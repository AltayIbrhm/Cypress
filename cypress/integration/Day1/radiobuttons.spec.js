
describe('radiobuttons Testing',()=>{


    it('radio buttons Test',()=>{
        cy.visit('http://practice.cybertekschool.com/radio_buttons')


        cy.get('[type="radio"]').then(radioButtons =>{
            cy.wrap(radioButtons).first()
            .check({force:true})
            .should('be.checked')

            cy.wrap(radioButtons).eq(1)
            .check({force:true})
            .should('be.checked')

            for(var i = 0;  i<=radioButtons.length-1; i++){
                cy.wrap(radioButtons).eq(i)
                .check({force:true})
                .should('be.checked')
            }
        })


    })





})