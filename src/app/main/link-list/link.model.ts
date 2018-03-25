export class Link {
  public lob: string;
  public variant: string;
  public url: string;
  public selected = false;

  constructor(lob: string, variant: string, link: string) {
    this.lob = lob;
    this.variant = variant;
    this.url = link;
  }
}
