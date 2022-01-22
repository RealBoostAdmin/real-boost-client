interface IBountyBase {
  readonly id: string;
  readonly created_at: Date;
  readonly updated_at: Date;

  readonly user_id: string;
  readonly mission_id: string;
}

interface IBountyAmount extends IBountyBase{
  readonly amount: number;
  readonly percent: undefined;
}

interface IBountyPercent extends IBountyBase{
  readonly amount: undefined;
  readonly percent: number;
}

export type IBounty = IBountyAmount | IBountyPercent;
