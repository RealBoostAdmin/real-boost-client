export interface IOption {
    readonly id: string;
    readonly name: string;
    readonly multiple: number; // for input radio / checkbox
    readonly created_at: Date;
    readonly updated_at: Date;
}
