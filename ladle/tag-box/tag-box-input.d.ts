import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
interface Props {
    wrapperRef: React.RefObject<HTMLDivElement>;
    onEnter: (value: string) => void;
}
declare const TagBoxInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default TagBoxInput;
