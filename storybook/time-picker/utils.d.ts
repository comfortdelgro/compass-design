/**
 * Slit format string for object with position, min, max, format value
 * @param format string
 */
export declare function splitTimeFormat(format: string): {
    hour: import("./types").TimePickerFormat;
    minute: import("./types").TimePickerFormat;
    second: import("./types").TimePickerFormat;
    session: import("./types").TimePickerFormat;
};
/**
 * Get Range of current selection position
 * @param format format of display time
 * @param focusIndex current selection position
 * @returns TimePickerFormat
 */
export declare function getSelectionOnFocus(format: string, focusIndex: number): import("./types").TimePickerFormat;
/**
 * Replace in the position want to replace
 * @param str root string
 * @param what text what want to replace
 * @param start start position
 * @param end end position
 * @returns string
 */
export declare function replaceBetween(str: string, what: string, start: number, end: number): string;
export declare const createDropdownList: (min: number, max: number, step?: number) => any[];
