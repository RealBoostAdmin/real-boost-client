export interface IAddress {
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly address: string;
  readonly zipcode: string;
  readonly city: string;
  readonly country: string;
  readonly created_at: Date;
  readonly updated_at: Date;

  readonly user_id: string;
}