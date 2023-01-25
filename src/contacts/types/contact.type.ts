export type Contact = {
  id?: number;
  contactType?: 'EMAIL' | 'COMERCIAL' | 'RESIDENCIAL' | 'TELEFONE';
  value?: string;
  validated?: boolean;
};
