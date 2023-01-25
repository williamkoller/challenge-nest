import { forwardRef, Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [forwardRef(() => ContactsModule)],
  controllers: [],
  providers: [],
})
export class AppModule {}
