import { Module } from '@nestjs/common';
import { ContactsController } from './controllers/contacts.controller';
import { ContactsService } from './services/contacts.service';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
