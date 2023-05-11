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
export const MyLabel = ({
  label = 'No label',
  allCaps = false,
  color = 'primary',
  fontColor,
  backgroundColor = 'transparent',
  size = 'normal',
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span >
  )
}

export default MyLabel;