import type { CSSProperties, DialogHTMLAttributes } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import type { CSS } from '../utils/objectToCss';
export type DrawerStylingSelectors = 'root' | 'header' | 'content' | 'footer';
type DrawerSharedProps = {
    classNames?: Partial<Record<DrawerStylingSelectors, string>>;
    /**
     * It is NOT recommended to use this prop, as the `classNames` prop is more flexible and has better performance.
     * ___
     * ***Note:** `styles[key]`'s value will be ignored if the related element's `style` property is provided.
     *
     * @example
     * ```tsx
     * <Drawer
     *    styles={{header: {backgroundColor: 'red'}}}
     * >
     *    <Drawer.Header style={{backgroundColor: 'blue'}}>Header</Drawer.Header>
     * </Drawer>
     * ```
     * In this case, `styles.header` will be ignored, the Drawer's header will have a blue background color.
     */
    styles?: Partial<Record<DrawerStylingSelectors, CSSProperties>>;
    backdropProps?: {
        /** @default rgba(0,0,0,0.4) */
        background?: string;
        /** @default 0 */
        blur?: string | number;
        /** @default 1 */
        opacity?: number;
    };
    /**
     * @default "modal"
     * @description
     * `modal`
     *
     * Act as a normal dialog.
     * It will be rendered on the top-layer with a backdrop.
     *
     * Everything other than the drawer and
     * its contents will be ignored by the browsers and can't be interact with.
     * ___
     * `non-modal`
     *
     * It has no backdrop and also doesn't render on the top-layer.
     * It can not be closed by pressing the `ESC` key.
     *
     * The content below the non-modal drawer can be interacted.
     *
     * {@link https://developer.mozilla.org/docs/Web/HTML/Element/dialog#accessibility_considerations Read more}
     *
     */
    drawerMode?: 'non-modal' | 'modal';
    /**
     * If `true`, disable a default behavior of `<dialog>` element:
     *
     * Browser won't autofocus on the first nested focusable element anymore.
     * @default false
     */
    preventFocus?: boolean;
    /**
     * If `true`, the drawer won't close when users press `Escape` key or click/tap on the backdrop.
     * @default false
     */
    preventClose?: boolean;
};
type DefaultDrawerProps = {
    /**
     * ___
     * `'default'` - Normal drawer.
     *
     * Browsers released starting from 2022 are fully supported https://developer.mozilla.org/docs/Web/HTML/Element/dialog#browser_compatibility.
     * ___
     */
    variant?: 'default';
    /** @default 'right' */
    position?: 'right' | 'bottom' | 'left' | 'top';
    css?: CSS;
    snapPoints?: never;
    disableResize?: never;
    disableDragClose?: never;
};
export type MobileDrawerSpecifiedProps = {
    /**
     * `'mobile'` - ⚠️ [Experimental] DO NOT use this variant in production.
     *
     * A variant that utilizes modern web technologies to replicate the iOS drawer (sheets) experience on the web
     * https://developer.apple.com/design/human-interface-guidelines/sheets#iOS-iPadOS.
     *
     *  🛠️ Under development features:
     * - Multiple snap points via `snapPoints` prop, the old `h5` variant only supports 1 snap point.
     * - Collapse the drawer height when a vitural keyboard is opened.
     * - [Considering] Dynamic Safari (iOS) theme bar.
     *
     * ⚠️ **Browser compatibility warning**: the `'mobile'` variant experiments with the latest web technology concepts and CSS features
     * such as view transitions, transitioning discrete animations, the `inert` attribute, etc... Browsers released starting from 2023 are fully supported.
     * Consider using and customizing the `Dialog` component for a more stable and widely browser supported experience.
     */
    variant: 'mobile';
    position?: never;
    /** @deprecated The `mobile` variant does NOT support this prop. Please use the `className`, `classNames`, `style` or `styles` property for styling instead. */
    css?: never;
    /**
     * An array of the percentage of the viewport height that represents the snap points of the drawer.
     * ___
     * The drawer will snap to the **nearest** point when users release their finger.
     * Be aware that the drawer's `max-height` has *higher priority* and will decide the maximum height that the drawer can expand to.
     *
     * Non-finite and out-of-range [0-100] numbers will be filtered out.
     * @example
     * ```jsx
     * <Drawer
     *  variant='mobile'
     *  styles={{root: {maxHeight: '80dvh'}}}
     *  snapPoints={[50, 20, NaN, Infinity, 1 / 0, 100, 123, -123, 10]} // => [10, 20, 50, 80]
     * />
     * // the drawer can snap to 10%, 20%, 50%, 80% (`max-height` is `80dvh`) of the viewport height.
     * ```
     *
     * @default [100] // allow to expand to fullscreen
     */
    snapPoints?: number[];
    /**
     * If `true`, the `'mobile'` drawer will NOT be able to expand/collapse, `snapPoints` will be ignored and the expander line will be hidden.
     * @default false
     */
    disableResize?: boolean;
    /**
     * Close the drawer if the user drags and drops it below the default height.
     *
     * Note that if `disableResize` is true, users can't drag the the drawer.
     * ___
     * @default false
     */
    disableDragClose?: boolean;
    /**
     * Enable document layer scale effect, creating a visual effect that the drawer is floating above the page content.
     * ___
     * The scale effect will be **disabled** if `drawerMode` is set to `non-modal`.
     * @default false
     */
    enableScaleLayer?: boolean;
    /** @default 16 (px) */
    scaleLayerOffset?: number;
    scaleLayerClassName?: string;
};
export type DrawerDefaultProps = DrawerSharedProps & DefaultDrawerProps;
export type DrawerMobileProps = DrawerSharedProps & MobileDrawerSpecifiedProps;
type Props = DrawerSharedProps & (DefaultDrawerProps | MobileDrawerSpecifiedProps);
export type DrawerProps = Props & Omit<DialogHTMLAttributes<HTMLDialogElement>, keyof Props | 'tabIndex' | 'autoFocus'>;
export type DrawerRef = HTMLDialogElement & {
    triggerCollapse: () => void;
};
export {};
