export class Staticpage{


    entertext(text_identifier,text){
        cy.xpath(text_identifier).clear({force: true})
        cy.xpath(text_identifier).first().type(`${text}{enter}`).should('have.value', text)
        
    }

    entertext_using_css_selector(text_identifier,text){
        cy.get(text_identifier).clear({force: true})
        cy.get(text_identifier).first().type(`${text}{enter}`).should('have.value', text)
        
    }

    Disabled_entity(text_identifier){
        cy.xpath(text_identifier).should("be.disabled")
        
    }



    Verify_Entity(Entity,text){

        
        //debugger;
        cy.get(Entity).should("contain", text)
        

    }

    Verify_Entity_and_click(Entity,text){
    
        //debugger;
        cy.get(Entity).should("contain", text).click()    

    }



    Verify_icon(icon){

        cy.get(icon)

    }

    enterClick(buttonIdentifier){
        cy.get(buttonIdentifier).first().click()

    }

    Verify_button(buttonIdentifier){
        cy.get(buttonIdentifier).first().click({force: true})

    }

    //verify_record_count(record_identifier,record_counter){
    ///    cy.get(record_identifier).should('have.length', record_counter)
    //}

    verify_record_count(record_identifier){
        cy.get(record_identifier).then(listing => {
            const listingCount = Cypress.$(listing).length;
            expect(listing).to.have.length(listingCount);
            return listingCount
          });
    }

    // verify_record_count_after_deletion(record_identifier){
    //     cy.get(record_identifier).then(listing => {
    //         const listingCount = Cypress.$(listing).length;
    //         var del_count = listingCount - 1;
    //         expect(listing).to.have.length(del_count);
    //         return listingCount
    //       });
    // }

    verify_record_count_after_addition(){
        var add_count = this.verify_record_count(".border-0 tr") + 1;
        var actual_count = this.verify_record_count(".border-0 tr");
        add_count == actual_count    

    }


    getRandomEmail(){
        var chars = 'abcdefghijklmnopqrstuvwxyz';
        return chars[Math.floor(Math.random()*26)] + Math.random().toString(36).substring(2,11) + '@domain.com';
    }
   
    Add_doctor_with_email(emailIdentifier){
        var email_1 = this.getRandomEmail();
        cy.get(emailIdentifier).clear()
        cy.get(emailIdentifier).type(`${email_1}{enter}`).should('have.value', email_1)
        return email_1
    } 

    Delete_doctor_email(emailIdentifier){

        cy.get(emailIdentifier).type(`${email_1}{enter}`).should('have.value', email_1)


    }


    get_element_with_xpath(xpath){
        cy.xpath(xpath).should("be.visible")
    }

    get_entity_with_xpath(xpath,text){
        cy.xpath(xpath).should("be.visible").should("contain", text)
    }

    
    get_entity_with_xpath_click(xpath,text){
        cy.xpath(xpath).should("be.visible").should("contain", text).click()
    }

    Value_from_dropdown(Identifier,option,option_2){
        cy.get(Identifier).first().select(option).should('have.value', 'male')

        //cy.get(Identifier).contains(value).click({ force: true })
        


        //cy.contains(value).click("multiple: true")
    }

    Calender(Identifier,year){
        cy.xpath(Identifier).first().click()
        cy.xpath(year)
           .each(($el,index,$list)=>{

               var sel_year = $el.text()
               if(sel_year == '1')
               {
                    cy.wrap($el).click()
               }


           })
        cy.xpath('//*[@id="name"]/div/input').first().click()
    }




}