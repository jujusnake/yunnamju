import { Link } from "react-router-dom";
import Arrow from "../components/svg/Arrow";

const Welcome = () => {
  return (
    <div>
      <div className={`flex flex-col items-center justify-center h-full text-center text-typography-main`}>
        <h1 className="text-[24px] leading-[133%] font-medium mb-6 md:mb-4">
          Hi There,
          <br /> This is{" "}
          <span className="relative">
            Yun, Namju{" "}
            <div className="absolute bottom-[1px] left-0 w-0 h-2 bg-label-blue animate-[label_300ms_ease-in-out_1000ms_forwards]" />
          </span>
          <aside className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] mt-1 text-typography-light">
            Yes, "Yun" is my family name
          </aside>
        </h1>

        <p className="text-pretty max-w-[423px] text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] mb-10 md:mb-8">
          I am a Front-end Developer
          <br />
          skilled in making stable and interactive web services.
        </p>
      </div>

      <div className="flex justify-center items-center text-[16px] leading-[26px] md:text-[18px] font-semibold gap-x-5 gap-y-1 md:gap-x-9 md:gap-y-2 flex-wrap">
        <Link to="/about" className="relative flex items-center gap-1 group">
          about me <Arrow />
          <div className="w-0 group-hover:w-full transition-all h-[6px] absolute bottom-0.5 left-0 bg-label-blue duration-300 ease-in-out" />
        </Link>
        <Link to="/works" className="relative flex items-center gap-1 group">
          works <Arrow />
          <div className="w-0 group-hover:w-full transition-all h-[6px] absolute bottom-0.5 left-0 bg-label-blue duration-300 ease-in-out" />
        </Link>
        <Link to="/contacts" className="relative flex items-center gap-1 group">
          contact <Arrow />
          <div className="w-0 group-hover:w-full transition-all h-[6px] absolute bottom-0.5 left-0 bg-label-blue duration-300 ease-in-out" />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
