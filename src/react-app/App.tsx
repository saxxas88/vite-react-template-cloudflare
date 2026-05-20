// src/App.tsx
/* lib */
import { useState } from "react";
/* style */
import "./style/App.css";
/* components */
import Toast from "./components/Toast";
import HeroForm from "./components/HeroForm";
import LogoLed from "./components/LogoLed";
import CookiesCard from "./components/CookiesCard";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <div className="app-container mx-auto my-0 flex min-h-screen flex-col items-center justify-start bg-gray-800 px-8 py-20">
        <HeroForm />
        <LogoLed />
        <CookiesCard />
        <div className="mt-8 flex flex-col items-center">
          <button
            className="btn"
            onClick={() => {
              fetch("/api/")
                .then((res) => res.json() as Promise<{ value: string }>)
                .then((data) => setName(data?.value))
                .catch(() => setName("Somenthing went wrong!"));
            }}
            aria-label="get name"
          >
            {`Name + EnvVariables from API `}
          </button>
          <Toast text={name} setText={setName} />
          <p className="mt-2 text-neutral-100">
            Edit <code>worker/index.ts</code> to change the value
          </p>
        </div>

        {/* <p className="read-the-docs">Click on the logos to learn more</p> */}
      </div>
    </>
  );
}

export default App;
