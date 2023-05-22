/// <reference types="cypress" />
import { environment_variable } from "../pages/Env";
import {Loginpage} from "../pages/log_in"
const loginpage = new Loginpage()


  it('Forgot with valid and registered email', () => {
    loginpage.HitURL(environment_variable.URL)
    loginpage.Click_button(environment_variable.login_button)
    loginpage.Click_link(environment_variable.fogotpassword_identifier)
    loginpage.enterinput(environment_variable.Forgot_email_identifier, environment_variable.Forgot_valid_email)
    loginpage.Press_button(environment_variable.Send_link)
    loginpage.Press_button(environment_variable.Forgot_Back_to_login_button)

  })