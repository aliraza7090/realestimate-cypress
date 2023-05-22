
export class register{

    HitURL(url){
        cy.visit(url)

    } 
  
    enterInput(emailIdentifier,Input){
        cy.get(emailIdentifier).click({force: true})
        cy.get(emailIdentifier).type(`${Input}{enter}`).should('have.value', Input)
        
    }


    Get_Element(ele,value){
        cy.get(ele).should('have.value', value)
    }

    Get_element(ele){
        cy.get(ele)
    }


    getRandomEmail(){
        var chars = 'abcdefghijklmnopqrstuvwxyz';
        return chars[Math.floor(Math.random()*26)] + Math.random().toString(36).substring(2,11) + '@gmail.com';
    }
   
    Add_user_with_email(emailIdentifier){
        var email_1 = this.getRandomEmail();
        cy.get(emailIdentifier).click({force: true})
        cy.wait(300)
        //cy.get(emailIdentifier).clear()
        cy.get(emailIdentifier).type(`${email_1}{enter}`).should('have.value', email_1)
        return email_1
    } 

    enterClick(buttonIdentifier){
        cy.get(buttonIdentifier).click({force: true})

    }

    back_to_login(buttonIdentifier){
        cy.get(buttonIdentifier).first().click({force: true})

    }

    Verify_url(UrlToVerify){
        cy.wait(300)
        cy.url().should('include', UrlToVerify)

    }



}