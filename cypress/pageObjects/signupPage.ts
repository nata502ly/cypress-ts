import {UserTestData} from "../entities/user-testData";
import {BasePage} from "./basePage";


export class SignupPage extends BasePage{

    static visit() {
        cy.visit('http://ip-5236.sunline.net.ua:38015/create_account')
    }

    static fillFirstName() {
        let user = UserTestData.getUser();
        const field = cy.get('#box-create-account input[name="firstname"]');
        field.clear().type(user.firstName);
        return this;
    }

    static fillLastName() {
        let user = UserTestData.getUser();
        const field = cy.get('#box-create-account input[name="lastname"]');
        field.clear().type(user.lastName);
        return this;
    }

    static fillEmail() {
        let user = UserTestData.getUser();
        const field = cy.get('#box-create-account input[name="email"]');
        field.clear().type(user.email);
        return this;
    }

    static fillPhone() {
        let user = UserTestData.getUser();
        const field = cy.get('#box-create-account input[name="phone"]');
        field.clear().type(user.phone);
        return this;
    }

    static fillPassword() {
        let user = UserTestData.getUser();
        const field = cy.get('#box-create-account input[name="password"]');
        field.clear().type(user.password);
        return this;
    }

    static fillConfirmed() {
        let user = UserTestData.getUser();
        const field = cy.get('#box-create-account input[name="confirmed_password"]');
        field.clear().type(user.password);
        return this;
    }

    static submit() {
        const button = cy.get('#box-create-account button[name="create_account"]');
        button.click()
    }

    static countrySelect() {
        const countrySelect = cy.get('select[name="country_code"]');
        countrySelect.select('Ukraine')
    }
}

export const signupPage = new SignupPage();
