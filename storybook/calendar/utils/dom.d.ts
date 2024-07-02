import { AriaLabelingProps, DOMProps } from '../types';
interface Options {
    /**
     * If labelling associated aria properties should be included in the filter.
     */
    labelable?: boolean;
    /**
     * A Set of other property names that should be included in the filter.
     */
    propNames?: Set<string>;
}
export declare function filterDOMProps(props: DOMProps & AriaLabelingProps, opts?: Options): DOMProps & AriaLabelingProps;
export {};
