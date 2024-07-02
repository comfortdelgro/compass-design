export declare function useControlledState<T, C = T>(value: Exclude<T, undefined>, defaultValue: Exclude<T, undefined> | undefined, onChange?: (v: C) => void): [T, (value: T) => void];
export declare function useControlledState<T, C = T>(value: Exclude<T, undefined> | undefined, defaultValue: Exclude<T, undefined>, onChange?: (v: C) => void): [T, (value: T) => void];
