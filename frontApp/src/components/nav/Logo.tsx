import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <img
        src={logo}
        className="bg-transparent h-10 w-10"
        alt="logo-doc-analyzer"
      />
      <span className="text-s ">DocAnalyzer</span>
    </div>
  );
}
