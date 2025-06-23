import Scrollbars from "react-custom-scrollbars-2";
import { EasyUnderlineAnimate, EasyUnderlineHover } from "../components/EasyUnderlineWrapper";
import { Briefcase, Mail, MapPin } from "react-feather";
import PicturePngWebp from "../components/PicturePngWebp";

const About = () => {
  return (
    <Scrollbars autoHide>
      <main className={`flex flex-col p-6 md:p-12 md:flex-row-reverse gap-11 md:gap-12`}>
        <div className="flex flex-col items-center flex-shrink-0 md:items-end">
          <PicturePngWebp src="/profile" alt="Yun Namju profile picture" className="w-[176px] h-[176px] mb-5" />

          <section className="flex flex-col items-center md:items-end">
            <h1 className="text-[18px] leading-[130%] mb-1.5 md:mb-0 font-semibold text-typo-main">Yun, Namju</h1>
            <h2 className="text-[14px] leading-[130%] mb-3.5 md:mb-5 text-typo-main">Front-end Developer</h2>

            <div className="flex flex-col items-center gap-1.5 md:gap-2 md:items-end">
              <div className="flex text-[12px] md:text-[14px] leading-[130%] items-center gap-1.5 font-medium">
                <MapPin className="text-typo-main" size={14} />
                Seoul, Korea
              </div>
              <div className="flex text-[12px] md:text-[14px] leading-[130%] items-center gap-1.5 font-medium">
                <Mail className="text-typo-main" size={14} />
                southpoley@gmail.com
              </div>
              <a
                className="flex text-[12px] md:text-[14px] leading-[130%] items-center gap-1.5 font-medium underline md:no-underline md:hover:underline"
                href="https://reconlabs.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Briefcase className="text-typo-main" size={14} />
                @reconlabs
              </a>
            </div>
          </section>
        </div>

        <section className="text-[13px] leading-[160%] md:text-[16px] md:leading-[150%] font-medium text-typo-main">
          <p className="mb-5 md:mb-6">
            Hello, I am Namju Yun. I am a junior <EasyUnderlineAnimate>web front-end developer</EasyUnderlineAnimate>{" "}
            with a passion for continuous skill enhancement and delivering top-tier web services.
          </p>
          <p className="mb-5 md:mb-6">
            As a reliable and responsible developer, I hold myself accountable for ensuring all tasks are done without
            bugs and <EasyUnderlineAnimate>never allow deadlines to pass</EasyUnderlineAnimate> without all tasks
            achieved completely.
          </p>
          <p className="mb-5 md:mb-10">
            My ultimate goal is to <EasyUnderlineAnimate>create the optimal product</EasyUnderlineAnimate>. I prioritize
            the collective success of the project over personal convenience, consistently advocating for strategies that
            yield the best outcomes for the entire team and end-users.
          </p>
          <div>
            <div className="md:mb-1">My current passions</div>
            <ul className="ml-3.5 md:ml-5 list-outside">
              <li className="list-disc md:mb-1">Computer Science (pursuing my 3rd bachelor's degree)</li>
              <li className="list-disc md:mb-1">Interactive Web animations, 3D (GSAP + three.js)</li>
              <li className="list-disc md:mb-1">Mobile app Development (React Native)</li>
            </ul>
          </div>
          <hr className="mt-8 mb-5 md:mt-8 border-border" />
          <div className="flex justify-end pb-6">
            <a
              className="font-normal text-[14px] md:text-[18px] leading-[150%] text-typo-main cursor-pointer"
              href="/resume_kr.pdf"
              target="_blank"
            >
              <EasyUnderlineHover>Download my resume →</EasyUnderlineHover>
            </a>
          </div>
        </section>
      </main>
    </Scrollbars>
  );
};

export default About;
