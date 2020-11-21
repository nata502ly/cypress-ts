export interface IUser {
    email: string,
    password: string,
    isAdmin?: boolean,
    isAvailable?: boolean,
    invitedUser?: IUser,
    firstName: string,
    lastName: string,
    company: string,
    phone: string}
