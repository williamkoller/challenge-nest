import { Logger } from '@nestjs/common';
import { PatchContactsDTO } from '../dtos/patch-contacts.dto';
import { Contact } from '../types/contact.type';
import { difference } from 'lodash';

export class ContactsService {
  private logger = new Logger(ContactsService.name);
  contacts: Contact[] = [];
  find(): { contacts: Contact[] } {
    return { contacts: this.contacts.map((contact) => contact) };
  }
  create(patchContactsDTO: PatchContactsDTO): { contacts: Contact[] } {
    this.logger.log(`create: ${JSON.stringify(patchContactsDTO)}`);
    const { contacts } = patchContactsDTO;

    contacts.map((contact) => this.contacts.push(contact));

    return {
      contacts: (this.contacts = this.contacts.filter((contact) => contact)),
    };
  }

  patchContacts(patchContactsDTO: PatchContactsDTO): { contacts: Contact[] } {
    const { contacts } = patchContactsDTO;
    this.logger.log(`contacts: ${JSON.stringify(contacts)}`);

    const contactsMerge = difference(contacts, this.contacts);
    this.logger.log(`contactsMerge: ${JSON.stringify(contactsMerge)}`);
    return {
      contacts: contactsMerge,
    };
  }
}
