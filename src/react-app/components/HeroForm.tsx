import EmailForm from "./EmailForm";

const HeroForm = () => {
  return (
    <>
      <div className="hero min-h-2/4 w-full bg-transparent py-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-neutral-50">{`Decidueye/DaisyUI`}</h1>
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
