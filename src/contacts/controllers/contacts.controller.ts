import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { PatchContactsDTO } from '../dtos/patch-contacts.dto';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../types/contact.type';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  find(): { contacts: Contact[] } {
    return this.contactsService.find();
  }

  @Post()
  create(@Body() patchContactsDTO: PatchContactsDTO): { contacts: Contact[] } {
    return this.contactsService.create(patchContactsDTO);
  }

  @Patch()
  patchContacts(@Body() patchContactsDTO: PatchContactsDTO): {
    contacts: Contact[];
  } {
    return this.contactsService.patchContacts(patchContactsDTO);
  }
}
