import { MdFileUpload } from "react-icons/md";
import Button from "../../components/reusableUi/Button";
import { GrPowerReset } from "react-icons/gr";

export default function Analyzer() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[660px]  flex flex-col mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full b py-2 px-5 border-b shadow-md flex justify-between">
          <Button label="Upload File" icon={<MdFileUpload />}>
            <input
              id="fileInput"
              className="hidden"
              name="pdfFile"
              type="file"
              accept=".pdf"
              onChange={() => {}}
            />
          </Button>
          <button className="text-xl text-gray-600">
            <GrPowerReset />
          </button>
        </div>
        <div className="flex-1 bg-gradient-to-b from-transparent to-red-200">
          <div className="w-full h-[600px] overflow-y-scroll flex flex-col gap-4 p-4">
            <div className="flex justify-end">
              <p className="px-5 py-3 rounded-xl shadow-sm max-w-md bg-white">
                Hi there, i'm your personal assistant and a very fast reader,
                upload a pdf doc and let see what i can do for you!
              </p>
            </div>

            <div className="flex justify-start">
              <p className="px-5 py-3 rounded-xl shadow-sm max-w-md bg-white">
                Hi there, i'm your personal assistant and a very fast reader,
                upload a pdf doc and let see what i can do for you!
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center  py-4">
            <form
              onSubmit={() => {
                console.log("submit");
              }}
              className="flex gap-2 w-5/6 py-3 px-4 border border-blue-200 bg-white rounded-3xl shadow-sm "
            >
              <input
                disabled={""}
                type="text"
                placeholder="Your message..."
                name="user_request"
                value={""}
                onChange={() => {}}
                className="flex-1 focus:outline-none "
              />
              <Button label="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
