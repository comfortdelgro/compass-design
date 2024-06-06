import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
declare const DatePickerProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const useDatePickerContext: () => {
    isReset?: boolean;
    setIsReset?: (value: boolean) => void;
};
export default DatePickerProvider;
