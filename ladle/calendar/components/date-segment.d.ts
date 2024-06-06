import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DateFieldState, DateSegment as IDateSegment } from '../types';
interface Props {
    segment: IDateSegment;
    state: DateFieldState;
}
declare const DateSegment: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default DateSegment;
