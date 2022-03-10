var data = require('../../fixtures/states.json')

describe('dropdown handling',()=>{


    it('First Test',()=>{
        cy.visit('http://practice.cybertekschool.com/dropdown')

        
        cy.get('[id="state"] > option').each(($el,index)=>{

            const text = $el.text()

            expect(text).to.contain(data.states[index])

            cy.get('[id="state"]').select($el.text()).should('be.visible')
        })
    })
})

//Task 
//Go to http://practice.cybertekschool.com/dropdown
// select your date of birth and do the assertion base on your birthdate.

