/// <reference types="cypress" />
import { environment_variable } from "../pages/Env";
import { register } from "../pages/register";
const Register = new register()


it('Register_with_already_registered_email_address', () => {
    Register.HitURL(environment_variable.URL)
    Register.enterClick(environment_variable.login_identifier)
    cy.wait(200)
    Register.enterClick(environment_variable.Register_identifier)
    Register.enterInput(environment_variable.Fullname_identifier, environment_variable.Fullname)
    Register.enterInput(environment_variable.Register_email_identifier, environment_variable.email)
    Register.Get_element(environment_variable.Tag_line_identifier)
    Register.enterInput(environment_variable.Register_password_identifier, environment_variable.Register_password)
    Register.enterInput(environment_variable.Phone_identifier, environment_variable.Phone)
    Register.Get_element(environment_variable.Phone_tag_line_identifier)
    Register.Get_element(environment_variable.Term_checkbox_tag_line_identifier)
    Register.enterClick(environment_variable.Term_Check_box)
    Register.Get_element(environment_variable.Newsletters_checkbox_tag_line_identifier)
    Register.enterClick(environment_variable.Newsletters_checkbox_identifier)
    Register.enterClick(environment_variable.Register_button)
    Register.Verify_url(environment_variable.Register_Url)


})