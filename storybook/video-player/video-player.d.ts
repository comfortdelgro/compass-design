import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    src: string;
    id?: string;
    loop?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
    controls?: boolean;
    poster?: string;
    preload?: 'auto' | 'metadata' | 'none';
    width?: number;
    height?: number;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-details'?: string;
    className?: string;
    css?: CSS;
    onNext?: () => void;
    onPrev?: () => void;
    onSetting?: () => void;
}
export type VideoPlayerProps = Props & Omit<React.ButtonHTMLAttributes<HTMLVideoElement>, keyof Props>;
declare const VideoPlayer: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLVideoElement>>;
export default VideoPlayer;
