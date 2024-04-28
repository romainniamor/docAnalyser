type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="bg-red-500 text-gray-50 py-2 px-6 rounded-lg hover:bg-red-600 hover:shadow-md transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
