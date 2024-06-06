import Body from './body';
import Display from './display';
import Header from './header';
import Label from './label';
import Link from './link';
interface ComposableChart {
    Body: typeof Body;
    Display: typeof Display;
    Header: typeof Header;
    Label: typeof Label;
    Link: typeof Link;
}
declare const Typography: ComposableChart;
export default Typography;
