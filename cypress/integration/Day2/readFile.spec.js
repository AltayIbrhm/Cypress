

describe('read and read file',()=>{
    

    it('read file scenario --json ' ,()=>{

        let path = 'cypress/fixtures/testdata.json'
    
        cy.readFile(path).its('name').should('eq','Ibrahim')
    
        cy.readFile("cypress/fixtures/testdata.json")
        .its("city")
        .should("eq", "Virginia");
    
    })
})


