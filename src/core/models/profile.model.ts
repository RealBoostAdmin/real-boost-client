export interface IProfile {
  readonly id: string;
  readonly currency: string;
  readonly created_at: Date;
  readonly updated_at: Date;

  readonly user_id: string;
}