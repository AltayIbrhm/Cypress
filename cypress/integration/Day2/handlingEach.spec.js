
var information =  require('../../fixtures/staging.json')

describe('Handling each function',()=>{


    before(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('[name="txtUsername"]').clear().type('Admin')
        cy.get('#txtPassword').clear().type('admin123')
        cy.get('[class="button"]').click()
    })

    it('Testing each text',()=>{
        cy.get('.quickLinkText').each(($el,index)=>{

            cy.log('element : ', $el.text())
            const text = $el.text()

            expect(text).to.contain(information.quickLaunch[index])





        })
    })
})