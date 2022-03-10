
var data = require('../../fixtures/states.json')

describe('Alerts',()=>{

    beforeEach(()=>{
        cy.visit('http://practice.cybertekschool.com/javascript_alerts')
    })

    it('Handling JS Alert  -Validate Alert Text and Click OK',()=>{
      
       cy.get('[onclick="jsAlert()"]').click()
       cy.on('window:alert',(str)=>{
           expect(str).to.equal("I am a JS Alert")
       })
       cy.on('window:confirm',()=>true);
       cy.get('#result').should('have.text','You successfully clicked an alert')

        
 
    })

    it('Handling JS Confirm -Click OK',()=>{
       
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal("I am a JS Confirm")
        })
        
        cy.on('window:confirm',()=>true);
        cy.get('#result').should('have.text','You clicked: Ok')
 
         
  
     })
    
    it('Handling JS Confirm -Click cancel',()=>{
       
       cy.get('[onclick="jsConfirm()"]').click()
    
       
       cy.on('window:confirm',()=>false);
       cy.get('#result').should('have.text','You clicked: Cancel')

        
 
    })

    it('Handling JS Promp - Input text in promt ,Click OK and Validate Input Text',()=>{
       

        cy.window().then(($win)=>{
            cy.stub($win,'prompt').returns('This is a test text')
            cy.get('[onclick="jsPrompt()"]').click()
        })
        cy.get('#result').should('have.text','You entered: This is a test text')
 
         
  
     })
})


