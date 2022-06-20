export interface IProduct {
  readonly id: string;
  readonly rules: JSON;
  readonly name: string;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly game_id: string;
}
