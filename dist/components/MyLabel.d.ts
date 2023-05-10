import './myLabel.css';
export interface MyLabelProps {
    /**
     * Label contents
     */
    label: string;
    /**
     * How large should the label be?
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Capitalize all characters
     */
    allCaps?: boolean;
    /**
     * What font color to use for the label
     */
    fontColor?: string;
    /**
     * What background color to use for the label
     */
    backgroundColor?: string;
}
/**
 * Primary UI component for user interaction
 */
export declare const MyLabel: ({ label, allCaps, color, fontColor, backgroundColor, size, }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
