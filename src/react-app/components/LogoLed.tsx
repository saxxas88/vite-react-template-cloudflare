/* style */
import "@style/LogoLed.css";
/* components */
import reactLogo from "@assets/logo/react.svg";
import viteLogo from "@assets/logo/vite.svg";
import cloudflareLogo from "@assets/logo/cloudflare.svg";
import honoLogo from "@assets/logo/hono.svg";
import { useEffect } from "react";

const LogoLed = () => {
  useEffect(() => {
    /*  const animationLed = async () => {
      try {
        const logos = document.querySelectorAll(
          ".container .container-logo .logo",
        );
        const arr = logos ? Array.from(logos) : [];
        for (const x of arr) {
          x.classList.add("hover");
          await new Promise((res) => setTimeout(res, 250, true));
          x.classList.remove("hover");
        }
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    }; */
    /*  animationLed();
    setInterval(animationLed, 1000); */
  }, []);
  return (
    <>
      <div className="container">
        <div className="container-logo">
          {/* <a href="https://vite.dev" target="_blank"> */}
          <img src={viteLogo} className="logo a vite" alt="Vite logo" />

          {/* <a href="https://react.dev" target="_blank"> */}
          <img src={reactLogo} className="logo a react" alt="React logo" />

          {/* <a href="https://hono.dev/" target="_blank"> */}
          <img src={honoLogo} className="logo a hono" alt="Hono logo" />
        </div>
        <div className="container-logo">
          {/* <a href="https://workers.cloudflare.com/" target="_blank"> */}
          <img
            src={cloudflareLogo}
            className="logo b cloudflare"
            alt="Cloudflare logo"
          />
        </div>
        <h2 className="text-neutral-50">{`Vite + React + Hono + Cloudflare`}</h2>
      </div>
    </>
  );
};

export default LogoLed;
