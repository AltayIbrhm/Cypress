
describe('Conditional Testing',()=>{


    it('Test Vikovoyage exist using length',()=>{

        cy.visit('/')

        cy.get('body').then((body)=>{

            if(body.find('[data-jsl10n="wikivoyage.name"]').length > 0){
                cy.get('[data-jsl10n="wikivoyage.name"]').click()
                cy.url().should('eq','https://www.wikivoyage.org/')
            }else{
                cy.get('[data-jsl10n="commons.slogan"]').click()
                cy.url().should('eq','https://commons.wikimedia.org/wiki/Main_Page')
            }
        })


    })
})