import { Link } from "react-router-dom";
import Arrow from "../components/svg/Arrow";
import { EasyUnderlineAnimate, EasyUnderlineHover } from "../components/EasyUnderlineWrapper";
import Scrollbars from "react-custom-scrollbars-2";

const Welcome = () => {
  return (
    <Scrollbars autoHide>
      <div className="flex flex-col items-center justify-center h-full p-4">
        <div className={`flex flex-col items-center justify-center text-center text-typo-main`}>
          <h1 className="text-[24px] leading-[133%] font-medium mb-6 md:mb-4">
            Hi There,
            <br /> This is{" "}
            <EasyUnderlineAnimate delay={1000} duration={500}>
              Yun, Namju{" "}
            </EasyUnderlineAnimate>
            <aside className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] mt-1 text-typo-light">
              Yes, "Yun" is my family name
            </aside>
          </h1>

          <p className="text-pretty max-w-[600px] text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] mb-10 md:mb-8">
            I am a Front-end Developer that delivers
            <br />
            <b className="font-medium">top quality</b> web products with <b className="font-medium">pixel perfect</b>{" "}
            design implementation
          </p>
        </div>

        <div className="flex justify-center items-center text-[16px] leading-[22px] md:text-[18px] font-semibold gap-x-5 gap-y-1 md:gap-x-9 md:gap-y-2 flex-wrap text-typo-main">
          <Link to="/about">
            <EasyUnderlineHover className="flex items-center gap-1">
              about me <Arrow />
            </EasyUnderlineHover>
          </Link>
          <Link to="/works">
            <EasyUnderlineHover className="flex items-center gap-1">
              works <Arrow />
            </EasyUnderlineHover>
          </Link>
          <Link to="/contacts">
            <EasyUnderlineHover className="flex items-center gap-1">
              contact <Arrow />
            </EasyUnderlineHover>
          </Link>
        </div>
      </div>
    </Scrollbars>
  );
};

export default Welcome;
