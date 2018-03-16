export class Agent {
  public name: string;
  public agsymbol: string;
  public taxnumber: number;
  public portalCode: string;

  constructor(name: string, agsymbol: string, taxnumber: number, portalCode: string) {
    this.name = name;
    this.agsymbol = agsymbol;
    this.taxnumber = taxnumber;
    this.portalCode = portalCode;
  }
}
