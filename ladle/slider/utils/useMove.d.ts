import { DOMAttributes, MoveEvents } from './types';
export interface MoveResult {
    moveProps: DOMAttributes;
}
export declare function useMove(props: MoveEvents): MoveResult;
