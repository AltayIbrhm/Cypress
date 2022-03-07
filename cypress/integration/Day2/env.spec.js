var url =require('../../fixtures/example.json')

if(url.include('test')){
    cy.fixture('staging.json').then((data)=>{
        
    })
}else if(url.include('uat')){
    cy.fixture('uat.json').then((data)=>{

    })
    
}else if(url.include('https://www')){
    cy.fixture('prod.json')
}
