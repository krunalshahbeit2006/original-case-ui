export class Fare {
  origin: string;
  destination: string;
  currency: string;
  amount: number;

  constructor(origin: string, destination: string, currency: string, amount: number) {
    this.origin = origin;
    this.destination = destination;
    this.currency = currency;
    this.amount = amount;
  }
}
