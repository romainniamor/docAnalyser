import { IconType } from "react-icons";

type PrimaryButtonProps = {
  label: string;
  onClick?: () => void;
  icon?: IconType;
  disable?: boolean;
};

export default function PrimaryButton({
  label,
  onClick,
  icon,
  disable,
}: PrimaryButtonProps) {
  return (
    <button
      className="flex gap-2  justify-normal items-center bg-red-500 text-gray-50 py-2 px-6 rounded-lg hover:bg-red-600 hover:shadow-md transition-all duration-300 ease-in-out"
      onClick={onClick}
      disabled={disable}
    >
      {label}
      {icon && icon}
    </button>
  );
}