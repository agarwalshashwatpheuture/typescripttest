export interface User {
    id: string,
    salutation?: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePhoto?: string

    getFullName(): string,
    setProfilePicture(): boolean,
    getProfilePicture(): string,
    getEmailID(): string,
    getUserID(): string,
    saveUser(): boolean
}

export interface Message {
    sender: User,
    receiver: User,
    message: string,
    creationTime: string,
    messageType: string

    getMessageText(): string,
    getMessageType(): string,
    getCreationTime(): string,
    saveMessage(): boolean
}