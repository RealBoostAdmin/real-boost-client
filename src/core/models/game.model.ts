export interface IGame {
  readonly id: string;
  readonly name: string;
  readonly image_url: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}