import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center items-center w-full">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#3b82f6"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
