import { ReactElement, Ref } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import type { PudoProps } from './pudo.types';
declare const Pudo: <ItemKeys extends PropertyKey>(p: PudoProps<ItemKeys> & {
    ref?: Ref<Omit<HTMLDivElement, 'onChange'>>;
}) => ReactElement;
export default Pudo;
