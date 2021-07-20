export type IObject = IObjectCustom<any>

export interface IObjectCustom<T> {
    [p: number]: T;
}