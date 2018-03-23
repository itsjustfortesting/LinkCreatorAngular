export class Agent {
  public name: string;
  public agSymbol: string;
  public taxNumber: number;
  public portalCode: string;

  constructor(name: string, agsymbol: string, taxnumber: number, portalCode: string) {
    this.name = name;
    this.agSymbol = agsymbol;
    this.taxNumber = taxnumber;
    this.portalCode = portalCode;
  }
}
