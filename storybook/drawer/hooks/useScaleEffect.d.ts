import { DrawerMobileProps } from '../types';
type UseScaleEffectOptions = Readonly<Pick<DrawerMobileProps, 'enableScaleBg' | 'scaleBgOffset' | 'scaleBgClassName'> & {
    drawerOpened?: boolean;
}>;
export declare const useScaleEffect: ({ drawerOpened, enableScaleBg, scaleBgClassName, scaleBgOffset, }?: UseScaleEffectOptions) => void;
export {};
