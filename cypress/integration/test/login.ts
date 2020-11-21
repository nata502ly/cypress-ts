import {App} from "../../pageObjects/application";

describe('Login', function(){
    it('should login with valid creds', function(){
        App.login.visit();
        App.login.fillEmail('nata@nata.nata');
        App.login.fillPassword('nata@nata.nata');
        App.login.submit();
        App.login.getAlert().should('contain', 'You are now logged in as')
    })
});
