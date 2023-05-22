export class calender{
    
    get_datepicker(){
        return cy.xpath('//*[@id="birthday"]/div/div[1]/div/input')

    }
    get_calender(){
        return cy.get('[class="rdtPicker"]')
    }

    get_navigation_back(){
        return cy.get('[class="rdtPrev"]')
    }

    get_navigation_forward(){
        return cy.get('[class="rdtNext"]')
    }

    get_year_and_month(){
        const currentYear = new Date().getFullYear()
        return cy.get('th[class="rdtSwitch"]')
    
    }

    get_date(){
        return cy.get("td[data-value='4'][data-month='2']")
    
    }





} 
export default calender