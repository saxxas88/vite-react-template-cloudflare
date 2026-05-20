import { Mail } from "lucide-react";
const EmailForm = () => {
  return (
    <>
      <div className="join w-full">
        <div className="m-0 w-3/4">
          <label className="input validator join-item w-full">
            <Mail className="text-neutral-400" />
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-neutral join-item m-0 w-1/4">Join</button>
      </div>
    </>
  );
};

export default EmailForm;
