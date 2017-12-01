export class S4Authentication {
    private token: string;
    private user: string;
    private realm: string;
    private password: string;
    private locale: string;
    
    constructor()
    constructor(token: string)
    constructor(user: string, realm: string, token: string)
    constructor(user: string, realm: string, token: string, locale: string)
    constructor(user?: string, realm?: string, token?: string, locale?: string) {
        this.token = token;
        this.realm = realm;
        this.user = user;
        this.locale = locale;
    }
    
    getToken(): string {
        return this.token;
    }

    setToken(token: string) {
        this.token = token;
    }

    getUser(): string {
        return this.user;
    }

    setUser(user: string) {
        this.user = user;
    }

    getRealm(): string {
        return this.realm;
    }

    setRealm(realm: string) {
        this.realm = realm;
    }

    getLocale(): string {
        return this.locale;
    }

    setLocale(locale: string) {
        this.locale = locale;
    }
}