import {loginPage} from "./loginPage";
import {signupPage} from "./signupPage";

export class Application {
    login = loginPage;
    signup = signupPage;

}
export const App: Application = new Application();
