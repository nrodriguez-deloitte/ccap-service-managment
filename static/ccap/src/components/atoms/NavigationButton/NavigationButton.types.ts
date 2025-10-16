export interface NavigationButtonProps {
  children?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  "aria-label"?: string;
  onButtonClick?: () => void;
}
