import { Link } from "react-router-dom";
import PrimaryButton from "../../components/reusableUi/PrimaryButton";

export default function HeroHeader() {
  return (
    <div className="flex justify-center items-center py-16 h-[600px] w-full bg-gradient-to-b from-transparent to-red-100">
      <div className=" flex flex-col gap-4 w-[800px]">
        <h1 className="font-extrabold text-4xl">
          Take advantage of AI to analyze your documents
        </h1>
        <div className="font-semibold">
          <p>🚀 Easy to use</p>
          <p>📁 Import your pdf documents</p>
          <p>💬 Ask your pdf </p>
        </div>
        <Link to={"/analyzer"}>
          <PrimaryButton label="Try It !" />
        </Link>
      </div>
    </div>
  );
}
