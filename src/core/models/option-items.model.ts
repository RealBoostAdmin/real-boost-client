import {IOptionItem} from './option-item.model';

export interface IOptionItems {
    readonly id: string;
    readonly name: string;
    readonly multiple: number; // for input radio / checkbox
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly items?: IOptionItem[] | undefined;
}
