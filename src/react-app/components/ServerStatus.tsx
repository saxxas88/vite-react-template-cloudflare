import { useEffect, useState } from "react";

const ServerStatus = () => {
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    fetch("/api/healt", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch((err) => setStatus(err.message));
  }, []);
  return <div>ServerStatus:{status}</div>;
};

export default ServerStatus;
