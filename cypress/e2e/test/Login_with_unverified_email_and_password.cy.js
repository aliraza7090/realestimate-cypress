/// <reference types="cypress" />
import { environment_variable } from "../pages/Env";
import {Loginpage} from "../pages/log_in"
const loginpage = new Loginpage()

  it('Login with unverified email and password', () => {
    loginpage.HitURL(environment_variable.URL)
    loginpage.Click_button(environment_variable.login_button)
    loginpage.enterUsername(environment_variable.email_identifier, environment_variable.unverifed_email)
    loginpage.enterPassword(environment_variable.password_identifier, environment_variable.Invalid_password)
    loginpage.enterClick(environment_variable.login_button, environment_variable.Register_Url)
  })