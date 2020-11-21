import {BasePage} from "./basePage";

export class LoginPage extends BasePage{
      visit() {
        cy.visit('http://ip-5236.sunline.net.ua:38015/login')
    }

     fillEmail(value:string) {
        const field = cy.get('#box-login input[name="email"]');
        field.clear().type(value);
        return this
    }

    fillPassword(value:string) {
        const field = cy.get('#box-login input[name="password"]');
        field.clear().type(value);
        return this
    }

    submit() {
        const button = cy.get('#box-login button[name="login"]');
        button.click()
    }
}

export const loginPage = new LoginPage();
