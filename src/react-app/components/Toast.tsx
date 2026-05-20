import { useEffect } from "react";

const Toast = ({
  text,
  setText,
}: {
  text: string;
  setText(text: string): void;
}) => {
  useEffect(() => {
    if (text && text?.trim() != "") setTimeout(() => setText(""), 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <>{text && <h2 className="toast_tmp">{text}</h2>}</>;
};

export default Toast;
