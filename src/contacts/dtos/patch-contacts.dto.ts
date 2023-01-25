import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';
import { Contact } from '../types/contact.type';

export class PatchContactsDTO {
  @ApiProperty({
    name: 'contacts',
    example: [
      {
        id: 2311,
        contactType: 'EMAIL',
        value: 'williamkoller44@gmail.com',
        validated: true,
      },
      {
        id: 1255,
        contactType: 'RESIDENCIAL',
        value: '41 4444-0000',
        validated: false,
      },
      {
        id: 2376,
        contactType: 'TELEFONE',
        value: '41 99852-9999',
        validated: false,
      },
    ],
  })
  @IsNotEmpty()
  @IsArray()
  contacts: Contact[];
}
