import './myLabel.css';

interface MyLabelProps {
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
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
  label = 'No label',
  allCaps = false,
  color = 'primary',
  fontColor,
  size = 'normal',
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span >
  )
}