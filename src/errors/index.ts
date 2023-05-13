export class AppError {
  message: string;
  secondMessage?: string;

  constructor(message: string, secondMessage?: string) {
    this.message = message;
    this.secondMessage = secondMessage;
  }
}
