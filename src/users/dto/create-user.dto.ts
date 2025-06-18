import { Role } from "../../enums/role.enum";

export class CreateUserDto {
  username: string;
  email: string;
  password: string;
  immage_url: string;
  is_verifed: boolean;
  role: Role;
}
