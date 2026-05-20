// src/App.tsx
/* lib */
import { useState } from "react";
/* style */
import "./style/App.css";
/* components */
import Toast from "./components/Toast";
import HeroForm from "./components/HeroForm";
import LogoLed from "./components/LogoLed";
import InfoCard from "./components/InfoCard";
import { Handshake, HeartPulse, Plus, Server, Smile } from "lucide-react";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <div className="app-container mx-auto my-0 flex min-h-screen flex-col items-center justify-start bg-gray-800 px-8 py-20">
        <HeroForm />
        <LogoLed />
        <div className="mx-auto flex w-full flex-col flex-wrap items-center justify-center gap-6 lg:flex-row">
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
        <div className="mt-8 flex flex-col items-center gap-y-2">
          <button
            className="btn"
            onClick={() => {
              fetch("/api/hello")
                .then(
                  (res) =>
                    res.json() as Promise<{ status: string; message: string }>,
                )
                .then((data) => setName(data?.message || data?.status))
                .catch(() => setName("Somenthing went wrong!"));
            }}
            aria-label="greeting"
          >
            <Handshake />

            <Smile />
          </button>
          <button
            className="btn"
            onClick={() => {
              fetch("/api/healt")
                .then((res) => res.json())
                .then((data) => setName(data?.status || data))
                .catch((err) => {
                  console.log(err);
                  setName("Somenthing went wrong!");
                });
            }}
            aria-label="check server status"
          >
            <Server />
            <Plus />

            <HeartPulse />
          </button>
          <Toast text={name} setText={setName} />
        </div>

        {/* <p className="read-the-docs">Click on the logos to learn more</p> */}
      </div>
    </>
  );
}

export default App;
