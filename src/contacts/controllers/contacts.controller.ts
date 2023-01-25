import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PatchContactsDTO } from '../dtos/patch-contacts.dto';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../types/contact.type';

@Controller('contacts')
@ApiTags('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  @ApiOkResponse({
    description: 'Find all contacts',
    type: PatchContactsDTO,
  })
  @ApiOperation({
    summary: 'Find all contacts',
  })
  find(): { contacts: Contact[] } {
    return this.contactsService.find();
  }

  @Post()
  @ApiOkResponse({
    description: 'Create an array contacs',
    type: PatchContactsDTO,
  })
  @ApiOperation({
    summary: 'Create an array contacs',
  })
  create(@Body() patchContactsDTO: PatchContactsDTO): { contacts: Contact[] } {
    return this.contactsService.create(patchContactsDTO);
  }

  @Patch()
  @ApiOkResponse({
    description: 'Patch contacts',
    type: PatchContactsDTO,
  })
  @ApiOperation({
    summary: 'Patch contacts',
  })
  patchContacts(@Body() patchContactsDTO: PatchContactsDTO): {
    contacts: Contact[];
  } {
    return this.contactsService.patchContacts(patchContactsDTO);
  }
}
