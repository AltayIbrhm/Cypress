

describe('Facebook Login Page Smoke Test',()=>{


    it('Positive Scenarios Testing',()=>{
        cy.login()
    })

    it('Wrong username Negative Testing',()=>{
        cy.wrong_username_Testing()
    })

    it('Wrong password Negative Testing',()=>{
        cy.wrong_password_Testing()
    })

    it('Wrong password and username Negative Testing',()=>{
        cy.wrong_username_password_Testing()
    })
})