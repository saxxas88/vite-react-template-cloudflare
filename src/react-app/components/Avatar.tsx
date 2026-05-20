import avatar_a from "../assets/avatar/decidueye-avatar.png";
import avatar_b from "../assets/avatar/decidueye_hisuian-avatar.png";

const AvatarDoubleHover = () => {
  return (
    <>
      <div className="avatar group relative h-20 w-20 cursor-pointer">
        <div className="ring-offset-base-100 t-0 l-0 absolute w-20 rounded-full ring-2 ring-green-600 ring-offset-1 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
          <img src={avatar_a} />
        </div>{" "}
        <div className="ring-offset-base-100 t-0 l-0 absolute w-20 rounded-full opacity-0 ring-2 ring-red-700 ring-offset-1 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <img src={avatar_b} />
        </div>
      </div>
    </>
  );
};

export default AvatarDoubleHover;
