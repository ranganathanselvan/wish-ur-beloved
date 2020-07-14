export class certificationDetails{
    public name: string;
    public certficateID:string;
    public issuer:string;
    public validFrom: string;
    public validTill: string;
    public notes: string;

    constructor(name:string, id:string, issuer:string, validFrom:string, validTill:string,notes:string){
        this.name = name;
        this.certficateID = id;
        this.issuer = issuer;
        this.validFrom = validFrom;
        this.validTill = validTill;
        this.notes = notes;
    }
}