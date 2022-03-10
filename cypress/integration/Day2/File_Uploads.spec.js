

describe('File Upload',()=>{


    it('Png file upload',()=>{

        cy.visit('http://practice.cybertekschool.com/upload')
        cy.get('#file-upload').attachFile('download.png')
        cy.get('[class="button"]').click()

        cy.get('#uploaded-files').invoke('text','download.png').should('be.visible')


    })
})