import { Currency } from "../../enums/currency.enum";

export class CreateAuthorDto {
  userId: number;
  bio: string;
  account_number: string;
  currency: Currency;
}
