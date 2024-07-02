export declare class Position {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
}
export declare class Pointer {
    startPoint: Position;
    lastPoint: Position;
    currentPoint: Position;
    start(position: Position): void;
    update(position: Position): void;
    end(position: Position): void;
    get distance(): Position;
}
