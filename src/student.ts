import { User } from './types';

class Student implements User {
    id: string;
    salutation?: string | undefined;
    firstName: string;
    lastName: string;
    email: string;
    profilePhoto?: string | undefined;

    constructor(user: User) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    setProfilePicture(): boolean {
        throw new Error('Method not implemented.');
    }
    getProfilePicture(): string {
        if(this.profilePhoto === undefined) {
            return 'defaultimage.jpg';
        }
        return this.profilePhoto;
    }
    getEmailID(): string {
        throw new Error('Method not implemented.');
    }
    getUserID(): string {
        throw new Error('Method not implemented.');
    }
    saveUser(): boolean {
        throw new Error('Method not implemented.');
    }
    
}

