export type PickKey<T, K extends keyof T> = Extract<keyof T, K>;

export type OmitKey<T, K extends keyof T> = Exclude<keyof T, K>;
