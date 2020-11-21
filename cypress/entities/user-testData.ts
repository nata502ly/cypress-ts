import * as randomstring from "randomstring";
import {IUser} from "./user-interface";

export class UserTestData {
    static getUser() {
        let user: IUser = {
            firstName: 'TestFirstName',
            lastName: 'TestLastName',
            company: 'TestCompany',
            email: `testEmail${randomstring.generate(7)}@yopmail.com`,
            password: 'testPassword123',
            phone: '+380970000000'
        };
        return user;
    }
}
