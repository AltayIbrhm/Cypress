

describe('write and read file',()=>{
    

    it('write file scenario --json ' ,()=>{

        let path = 'cypress/fixtures/testdata.json'
        cy.writeFile(path,{name : "Ibrahim",city : "Virginia", phone : "12345678900"})
    })
})


