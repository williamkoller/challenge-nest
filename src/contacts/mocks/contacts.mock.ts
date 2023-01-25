import { Contact } from '../types/contact.type';

export const contactsMock = {
  contacts: [
    {
      id: 1233,
      contactType: 'COMERCIAL',
      value: '41 3333-3333',
      validated: false,
    },
    {
      id: 2311,
      contactType: 'EMAIL',
      value: 'williamkoller@gmail.com',
      validated: true,
    },
    {
      id: 1255,
      contactType: 'RESIDENCIAL',
      value: '41 4444-4444',
      validated: false,
    },
    {
      id: 2376,
      contactType: 'TELEFONE',
      value: '41 99852-2233',
      validated: false,
    },
  ] as Contact[],
};
