
import {teslaURL} from '../..//support/authentication.constant'
import { onModelSPage} from '../../support/models'
import { onModel3Page} from '../../support/model3'





describe('Tesla.com automation',()=>{
beforeEach('Navigate the page to tesla.com',()=>{
    cy.visit(teslaURL)
})

    it('Model S Testing',()=>{
        
        onModelSPage.urlVerification()
        onModelSPage.privacy_Verification()
        onModelSPage.modelScomparePage()
              
    })

    it.only('Model 3 Testing',()=>{
        
        onModel3Page.urlVerification()
        // onModelSPage.privacy_Verification()
        // onModelSPage.modelScomparePage()
              
    })
})



