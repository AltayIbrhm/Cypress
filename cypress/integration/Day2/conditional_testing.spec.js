/// <reference types="cypress" />


describe('conditional checking',()=>{

    
    it('test Wikovoyage exist using length',()=>{
        cy.visit('/')

   
        cy.get('body').then((body)=>{
            if(body.find('[data-jsl10n="wikivoyage.slogan"]').length > 0){
                cy.get('[data-jsl10n="wikivoyage.slogan"]').click()
                cy.url().should('eq','https://www.wikivoyage.org/')
            }else{
                cy.get('[data-jsl10n="commons.slogan"]').click()
                cy.url.should('eq','https://commons.wikimedia.org/wiki/Main_Page')
            }
        })


    })

    it('test Wikovoyage exist using text',()=>{
        cy.visit('/')

   
        cy.get('[data-jsl10n="wikivoyage.name"]').then(($el)=>{
            const text  = $el.text()
            if(text.includes('Wikivoyage')){
                cy.get('[data-jsl10n="wikivoyage.slogan"]').click()
                cy.url().should('eq','https://www.wikivoyage.org/')
            }else{
                cy.get('[data-jsl10n="commons.slogan"]').click()
                cy.url.should('eq','https://commons.wikimedia.org/wiki/Main_Page')
            }
        })


    })

})
