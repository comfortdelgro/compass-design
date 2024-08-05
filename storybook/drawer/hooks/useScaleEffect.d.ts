import type { DrawerMobileProps } from '../types';
type UseScaleEffectOptions = Readonly<Pick<DrawerMobileProps, 'scaleLayerOffset' | 'scaleLayerClassName'> & {
    enable?: boolean;
}>;
export declare const useScaleEffect: ({ enable, scaleLayerClassName, scaleLayerOffset, }?: UseScaleEffectOptions) => {
    scaleElement: HTMLElement;
    getScaleValue: () => number;
    controlScaleEffect: (shouldScale?: boolean) => void;
};
export {};
