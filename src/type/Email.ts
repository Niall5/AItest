type EmailBrand = {
    readonly Email: unique symbol;
};

export type Email = string & EmailBrand;

export function createEmail(email: string): Email {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("Invalid email format");
    }
    return email as Email;
}