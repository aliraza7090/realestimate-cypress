/// <reference types="cypress" />
import { environment_variable } from "../pages/Env";
import {Loginpage} from "../pages/log_in"
const loginpage = new Loginpage()

  it('Login with valid email and invalid password', () => {
    loginpage.HitURL(environment_variable.URL)
    loginpage.Click_button(environment_variable.login_button)
    loginpage.enterUsername(environment_variable.email_identifier, environment_variable.email)
    loginpage.enterPassword(environment_variable.password_identifier, environment_variable.Invalid_password)
    loginpage.Get_Error(environment_variable.Error_message_identifier)
    loginpage.enterClick(environment_variable.login_button, environment_variable.Register_Url)
  })