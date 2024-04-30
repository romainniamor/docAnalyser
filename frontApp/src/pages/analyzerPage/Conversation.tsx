import Sentence from "./Sentence";

export default function Conversation({ message }) {
  return (
    <div className="flex flex-col gap-2">
      <Sentence content={message.question} position={"justify-start"} />
      <Sentence content={message.response} position={"justify-end"} />
    </div>
  );
}
