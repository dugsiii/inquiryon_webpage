function Bubble() {
  return <div className="h-full w-120 p-4 rounded-lg bg-accent">bubblB</div>;
}

export default function ChatBox() {
  return (
    <div className="h-full w-120 p-4 rounded-lg bg-mid-grey">
      <Bubble />
    </div>
  );
}
