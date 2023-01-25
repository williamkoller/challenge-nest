import { IsArray, IsNotEmpty } from 'class-validator';
import { Contact } from '../types/contact.type';

export class PatchContactsDTO {
  @IsNotEmpty()
  @IsArray()
  contacts: Contact[];
}
