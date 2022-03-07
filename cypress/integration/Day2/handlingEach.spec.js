/// <reference types="cypress" />

var data = require('../../fixtures/staging.json')

describe('handling each function',()=>{

    before(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()

  
    })

    it('Testing',()=>{
        cy.get('.quickLinkText').each(($el,index)=>{

            cy.log('$el : ', $el.text())
            const text = $el.text()
            expect(text).to.contain(data.quickLaunch[index])
            
            if(text == "My Timesheet"){
                //Jquery element
                cy.wrap($el).click()
            }
        
        
        })
    })

    

 

})
