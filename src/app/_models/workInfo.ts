export class workInfo{
    public proName: string;
    public designation:string;
    public proDesc:string;
    public from: string;
    public to: string;
    public roles:string;

    constructor(proName:string, designation:string, proDesc:string, from:string, to:string,roles:string){
        this.proName = proName;
        this.designation = designation;
        this.proDesc = proDesc;
        this.from = from;
        this.to = to;
        this.roles = roles;
    }
}