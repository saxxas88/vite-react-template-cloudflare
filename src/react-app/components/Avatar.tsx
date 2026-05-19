import avatar_a from "../assets/avatar/decidueye-avatar.png";
import avatar_b from "../assets/avatar/decidueye_hisuian-avatar.png";

const AvatarDoubleHover = () => {
  return (
    <>
      <div className="avatar relative group w-20 h-20 my-6 cursor-pointer">
        <div className=" ring-green-600 ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-1 transition-opacity 
                    duration-300 ease-in-out group-hover:opacity-0 absolute t-0 l-0">
          <img src={avatar_a} />
        </div>
        <div className=" ring-red-700 ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-1 transition-opacity 
                    duration-300 ease-in-out opacity-0 group-hover:opacity-100 absolute t-0 l-0">
          <img src={avatar_b} />
        </div>
      </div>
    </>
  );
};

export default AvatarDoubleHover;
