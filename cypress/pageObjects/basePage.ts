
export class BasePage {
    getAlert() {
        return cy.get('div#notices')
    }
}
