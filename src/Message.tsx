import User from "./User.tsx"

interface MessageProps {
  text: string;
}

function Message({ text }: MessageProps) {
  return <h2>{text}<User name="Adil Bouhoum" age={21} isMember={false}/></h2>;
}

export default Message;
