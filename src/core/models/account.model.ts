export interface IAccount {
  readonly id: string;
  readonly role: Role;
  readonly email: string;
  readonly username: string;
  readonly avatar_url: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}

export enum Role {
  SUPER_ADMIN ='SUPER_ADMIN',
  ADMIN = 'ADMIN',
  BOOSTER = 'BOOSTER',
  CLIENT = 'CLIENT',
}