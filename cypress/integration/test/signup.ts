import {App} from "../../pageObjects/application";

describe('User', function(){
    it('should signup with valid creds', function(){
        App.signup.visit();
        App.signup.fillFirstName();
        App.signup.fillLastName();
        App.signup.fillEmail();
        App.signup.fillPhone();
        App.signup.fillPassword();
        App.signup.fillConfirmed();
        App.signup.countrySelect();
        App.signup.submit();
        App.signup.getAlert().should('contain', 'Your customer account has been created');
    })
});
