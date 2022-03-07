/// <reference types="cypress" />

// cy.viewport('iphone-xr')
describe('first test',()=>{

    
    it('test wikipedia',()=>{
        cy.visit('https://wikipedia.org')

        // / 

        cy.title().should('eq','Wikipedia')
        cy.get('#searchInput').clear().type('cypress{enter}')
        cy.url().should('include','/wiki/Cypress')
        cy.get('h1').should('have.text','Cypress')

    })

    it('test wikipedia -getText',()=>{
        cy.visit('/')

        // / 

        cy.title().should('eq','Wikipedia')
        cy.get('#searchInput').clear().type('cypress{enter}')
        cy.url().should('include','/wiki/Cypress')

        //callback function
        cy.get('h1').then(($el)=>{
            const text = $el.text()
            expect(text).to.eq('Cypress')
        })

    })

    it('test wikipedia -getText() using invoke function',()=>{
        cy.visit('/')

        // / 

        cy.title().should('eq','Wikipedia')
        cy.get('#searchInput').clear().type('cypress{enter}')
        cy.url().should('include','/wiki/Cypress')

        //invoke function
        cy.get('h1').invoke('text').then((text)=>{
        
            expect(text).to.eq('Cypress')
        })

    })
})
