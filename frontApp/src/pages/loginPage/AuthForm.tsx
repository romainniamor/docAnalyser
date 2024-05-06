import { IoIosArrowDroprightCircle } from "react-icons/io";

type AuthFormProps = {
  onSubmit: () => void;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AuthForm({
  onSubmit,
  placeholder,
  value,
  onChange,
}: AuthFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`flex gap-2 w-5/6 py-1  px-4 border border-blue-300  rounded-3xl shadow-sm
          `}
    >
      <input
        type="text"
        name="user"
        value={value}
        placeholder={placeholder}
        className="flex-1 focus:outline-none bg-transparent text-dark-900"
        onChange={onChange}
      />
      <button className="text-blue-200">
        <IoIosArrowDroprightCircle />
      </button>
    </form>
  );
}
