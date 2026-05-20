import AvatarDoubleHover from "./Avatar";
import EmailForm from "./EmailForm";

const HeroForm = () => {
  return (
    <>
      <div className="hero min-h-2/4 w-full bg-transparent py-8">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <div className="flex w-full flex-col items-center gap-y-10">
              <h1 className="relative text-[2.1em] font-bold text-neutral-50 md:text-5xl">{`Decidueye/DaisyUI`}</h1>
              <AvatarDoubleHover />
            </div>
            <p className="py-6 text-neutral-100">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac porttitor ex. Donec lacinia ex quis turpis consectetur euismod. Maecenas erat nisi, scelerisque vitae mi in, laoreet dapibus purus. Sed.`}
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <EmailForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroForm;
