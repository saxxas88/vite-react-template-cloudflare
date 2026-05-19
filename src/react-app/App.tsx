// src/App.tsx

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import "./App.css";
import Toast from "./components/Toast";

import AvatarDoubleHover from "./components/Avatar";
import HeroForm from "./components/HeroForm";

let interval: number = 0;

function App() {
  const [stateAnimation, setStateAnimation] = useState(0);
  const [name, setName] = useState("");

  const animationLed = async () => {
    try {
      const logos = document.querySelectorAll(
        ".container .container-logo .logo",
      );
      const arr = logos ? Array.from(logos) : [];
      for (const x of arr) {
        x.classList.add("hover");
        await new Promise((res) => setTimeout(res, 500, true));
        x.classList.remove("hover");
      }
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      console.log(message);
    }
  };

  const animationLedStartStop = () => {
    animationLed();
    interval = setInterval(animationLed, 2000);
  };

  useEffect(() => {
    if (stateAnimation % 2 == 0) clearInterval(interval);
    else animationLedStartStop();
    return () => {
      return clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateAnimation]);

  return (
    <>
      <div className="app-container mx-auto my-0 flex min-h-screen flex-col items-center justify-start bg-gray-800 px-8 py-20">
        <HeroForm />

        <div className="relative container">
          <AvatarDoubleHover />
        </div>
        <div className="container">
          <div className="container-logo">
            {/* <a href="https://vite.dev" target="_blank"> */}
            <img src={viteLogo} className="logo a vite" alt="Vite logo" />

            {/* <a href="https://react.dev" target="_blank"> */}
            <img src={reactLogo} className="logo a react" alt="React logo" />

            {/* <a href="https://hono.dev/" target="_blank"> */}
            <img src={honoLogo} className="logo a cloudflare" alt="Hono logo" />
          </div>
          <div className="container-logo">
            {/* <a href="https://workers.cloudflare.com/" target="_blank"> */}
            <img
              src={cloudflareLogo}
              className="logo b cloudflare"
              alt="Cloudflare logo"
            />
          </div>
        </div>
        <h2 className="text-neutral-50">Vite + React + Hono + Cloudflare</h2>
        <div className="mt-8 flex flex-col items-center">
          <button
            className="btn"
            onClick={() => {
              setStateAnimation((val) => val + 1);
            }}
            aria-label="increment"
          >
            {stateAnimation % 2 == 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play-icon lucide-play"
              >
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pause-icon lucide-pause"
              >
                <rect x="14" y="3" width="5" height="18" rx="1" />
                <rect x="5" y="3" width="5" height="18" rx="1" />
              </svg>
            )}
          </button>
          <p className="mt-2 text-neutral-100">
            Click <code>Start/Stop</code> animation LED
          </p>
        </div>
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
