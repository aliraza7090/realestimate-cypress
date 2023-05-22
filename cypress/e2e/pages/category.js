
export class category{


    clickCategory(categoryIdenfication,categoryUrl){
        cy.get(categoryIdenfication).click()
        cy.url().should('include', categoryUrl)
    

    }


}