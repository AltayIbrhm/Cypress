

describe('handling file uploads',()=>{


    it('Upload image file',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('download.png')
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').invoke('text','download.png').should('be.visible')
    })

    
})