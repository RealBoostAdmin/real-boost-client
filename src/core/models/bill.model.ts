export interface IBill {
  readonly id: string;
  readonly code: string;
  readonly pdf_url: string | undefined;
  readonly created_at: Date;
  readonly updated_at: Date;

  readonly user_id: string;
  readonly mission_id: string;
}