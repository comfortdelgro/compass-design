/// <reference types="react" />
/**
 * A Slide action or Swiper component that requires user to swipe to confirm an action.
 *
 * Usually use for important actions, such as purchase order, turn off privacy setting, delete something, etc.
 */
declare const SlideAction: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<{
    css?: import("../utils/objectToCss").CSS;
    icon?: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactNode;
    label?: string;
    color?: string;
    onChange?: (isSuccess: boolean) => void;
    onSwipeEnd?: (reset: () => void) => void;
    allowSwipeAfterEnd?: boolean;
    compact?: boolean;
    labelType?: "slide" | "default";
    slideType?: "slide" | "static";
    slideColor?: "mono" | "gradient";
} & Omit<import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').HTMLAttributes<HTMLDivElement>, keyof {
    css?: import("../utils/objectToCss").CSS;
    icon?: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactNode;
    label?: string;
    color?: string;
    onChange?: (isSuccess: boolean) => void;
    onSwipeEnd?: (reset: () => void) => void;
    allowSwipeAfterEnd?: boolean;
    compact?: boolean;
    labelType?: "slide" | "default";
    slideType?: "slide" | "static";
    slideColor?: "mono" | "gradient";
}> & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export default SlideAction;
