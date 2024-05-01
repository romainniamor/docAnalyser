import { IconType } from "react-icons";

type LogoButtonProps = {
  icon: IconType | JSX.Element;
  onClick: () => void;
};

export default function LogoButton({ icon, onClick }: LogoButtonProps) {
  return (
    <button className="text-xl text-gray-600" onClick={onClick}>
      {icon}
    </button>
  );
}
