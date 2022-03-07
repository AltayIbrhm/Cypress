//visit
<reference types="cypress" />


cy.visit('open url')
cy.visit('url',{timeout : 10000})

//should is a promise in here 
cy.url().should('include',path)

//finding the element
//loc is the reference
cy.get(loc).click()
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exist')
//negative senario
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')

//https://docs.cypress.io/api/table-of-contents
cy.get('h1').should('have.text',"Table of Contents")
cy.get('input').should('have.value',"James")

//traversing

//parent to child or child to parent
//https://docs.cypress.io/api/table-of-contents
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(3).click()

cy.get(loc).next().click()
//if you dont use the multiple true it will throw an exception
cy.go('back')
cy.get(loc).nextAll.click({multiple : true})


cy.get(loc).prev().click()
cy.get(loc).prevAll().click()

//position handling
//https://the-internet.herokuapp.com/login
cy.get(loc).click('top')
cy.get(loc).click('buttom')
cy.get(loc).click('topLeft')

//hover handling
//https://docs.cypress.io/api/commands/hover
cy.get(loc).trigger('mouseover').click()
//http://links.giveawayoftheday.com/demo.guru99.com/#
cy.get(loc).trigger('mouseup').click()
cy.get(loc).trigger('mousedown').click()



//login
cy.get('#username').clear().type('username');

