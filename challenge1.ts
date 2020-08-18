class User {
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    emailMatch(email): boolean {
        return this.email === email;
    }
}