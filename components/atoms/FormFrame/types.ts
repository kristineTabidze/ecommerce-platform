export interface IFormFrame {
  isSelected: boolean;
  onClick: (val: string) => void;
  value: string;
  children: React.ReactNode;
}