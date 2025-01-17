import DP from "../assets/images/profile.png";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { HeaderSocials } from "./Socials";
export const Header = () => {
  return (
    <div className="flex flex-col gap-2 font-dmSan mt-[4rem]">
      <div className="flex gap-8 items-center lg:flex-row flex-col justify-center">
        {/* <div className="relative rounded-full border p-1">
          <img
            src={DP}
            alt=""
            className=" object-cover rounded-full h-[5rem] w-[10rem] "
          />
          <div className="absolute  bg-brand inset-0  h-5 w-5 rounded-full top-[2rem] left-5 border-[3px] border-white dark:border-black drop-shadow-lg" >
          <div className="size-full animate-ping rounded-full bg-brand "/>
          </div>
        </div> */}
        <div className="flex gap-4 flex-col lg:justify-start justify-center w-full">
          <div className="text-5xl flex font-michroma items-center gap-1 dark:text-white ">
            <h1>Samuel Peters</h1>
            <BiSolidBadgeCheck className="text-xl mt-3 text-blue-800 dark:text-brand" />
          </div>
          <div className="text-balance text-neutral-200  lg:w-[35rem]">
            <p className=" ">
              {" "}
              I’m Samuel, a creative{" "}
              <span className="font-bold hover:text-brand">
                full-stack web developer
              </span>
              , designer, and a CS student. I help bring{" "}
              <span className="font-bold hover:text-brand">ideas to life </span>
              by building things that live on the{" "}
              <span className="font-bold hover:text-brand">web</span> and{" "}
              <span className="font-bold hover:text-brand">mobile</span>.{" "}
            </p>
            <p className="text-balance flex items-center gap-2 hover:text-brand my-2 cursor-pointer text-sm">
              {" "}
              <SlLocationPin className="" />
              Lagos, Nigeria.
            </p>
          </div>
          <div className="text-lg dark:text-white flex-col">
            <HeaderSocials />
            <p className="text-xs mt-5 border-brand border-1 rounded-xl">
              Available for Collaboration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Header;
