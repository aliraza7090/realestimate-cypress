
export class Loginpage{


    HitURL(url){
        cy.visit(url)

    }    

    enterUsername(emailIdentifier,email){
        cy.get(emailIdentifier).click({force: true})
        cy.get(emailIdentifier).type(`${email}{enter}`).should('have.value', email)
        
    }

    enterPassword(passwordIdenfication,password){
        cy.get(passwordIdenfication).click({force: true})
        cy.get(passwordIdenfication).type(`${password}{enter}`).should('have.value', password)

    }

    enterClick(buttonIdentifier,UrlToVerify){
        cy.get(buttonIdentifier).click({force: true})
        cy.url().should('include', UrlToVerify)

    }
    Click_button(){
        cy.get('.list-inline-item > .circle').click({force: true})

    }

    Get_Error(error){
        cy.get(error).should('have.value', "")
    }

    Get_Element(ele,value){
        cy.get(ele).should('have.value', value)
    }

    Get_element(ele){
        cy.get(ele)
    }

    Click_link(link){
        cy.get(link).click({force: true})

    }

    Press_button(button){
        cy.wait(60)
        cy.get(button).first().click({force: true})

    }

    enterinput(emailIdentifier,email){
        cy.wait(300)
        cy.get(emailIdentifier).first().click({force: true})
        cy.get(emailIdentifier).first().type(`${email}{enter}`).should('have.value', email)
        
    }

    Verify_url(UrlToVerify){
        cy.wait(300)
        cy.url().should('include', UrlToVerify)

    }



}