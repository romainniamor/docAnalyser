type DialogueBoxProps = {
  className: "justify-end" | "justify-start";
  content: string;
};

export default function DialogueBox({ position, content }: DialogueBoxProps) {
  return (
    <div className={`flex ${position}`}>
      <p className="px-5 py-3 rounded-xl shadow-sm max-w-md bg-white">
        {content}
      </p>
    </div>
  );
}
