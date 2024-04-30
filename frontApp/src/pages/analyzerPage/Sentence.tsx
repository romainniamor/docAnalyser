type SentenceProps = {
  className: "justify-end" | "justify-start";
  content: string;
};

export default function Sentence({ position, content }: SentenceProps) {
  return (
    <div className={`flex ${position}`}>
      <div className="px-5 py-3 rounded-xl shadow-sm max-w-md bg-white flex justify-start items-center gap-2">
        <span>{content}</span>
      </div>
    </div>
  );
}
