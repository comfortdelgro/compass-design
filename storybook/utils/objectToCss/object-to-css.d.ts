export interface StyleObject {
    [key: string]: string | StyleObject;
}
declare function objectToCSS(obj: StyleObject, selector?: string, indent?: string): string;
export default objectToCSS;
