export interface IGame {
  readonly id: string;
  readonly name: string;
  readonly icon_url: string;
  readonly image_url: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}