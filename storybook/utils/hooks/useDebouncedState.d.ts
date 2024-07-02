import { type Dispatch, type SetStateAction } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export declare function useDebouncedState<T = unknown>(defaultValue: T, wait: number, options?: {
    /** Immediately update value on first call */
    updateFirstChange: boolean;
}): Readonly<[T, Dispatch<SetStateAction<T>>]>;
