export class TelLinkFormmater {
  private tel: string;

  constructor(tel: string) {
    this.tel = tel;
  }

  private getTelFormatter(tel: string, isClear: boolean = false): string {
    const arr = isClear
      ? [" ", "(", ")", "-", "+", "–"]
      : [" ", "(", ")", "-", "–"];
    return arr.reduce((acc, char) => acc.split(char).join(""), tel);
  }

  public getTelLink(): string {
    const telFormatted = this.getTelFormatter(this.tel);

    return `tel:${telFormatted}`;
  }

  public getViberLink(): string {
    const telFormatted = this.getTelFormatter(this.tel, true);

    return `viber://chat?number=%2B${telFormatted}`;
  }

  public getTelegramLink(): string {
    const telFormatted = this.getTelFormatter(this.tel);

    return `https://t.me/${telFormatted}`;
  }

  public getWhatsupLink(): string {
    const telFormatted = this.getTelFormatter(this.tel, true);

    return `https://wa.me/${telFormatted}`;
  }
}
