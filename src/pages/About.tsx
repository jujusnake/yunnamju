import EasyUnderlineWrapper from "../components/EasyUnderlineWrapper";
import { Briefcase, Mail, MapPin } from "react-feather";

const About = () => {
  return (
    <div>
      asdf
      {/* <main className={`w-full h-full absolute top-0 left-0 overflow-hidden`}>
        <div className="flex flex-col h-full p-6 overflow-auto md:p-12 md:flex-row-reverse gap-11 md:gap-12">
          <div className="flex flex-col items-center flex-shrink-0 md:items-end">
            <picture>
              <source srcSet={"/profile.webp"} type="image/webp" />
              <img src={"/profile.png"} alt="Yun Namju profile picture" className="w-[176px] h-[176px] mb-5" />
            </picture>

            <section className="flex flex-col items-center md:items-end">
              <h1 className="text-[18px] leading-[130%] mb-1.5 md:mb-0 font-semibold text-typography-main">
                Yun, Namju
              </h1>
              <h2 className="text-[14px] leading-[130%] mb-3.5 md:mb-5 text-typography-main">Front-end Developer</h2>

              <div className="flex flex-col items-center gap-1.5 md:gap-2 md:items-end">
                <div className="flex text-[12px] md:text-[14px] leading-[130%] items-center gap-1.5 font-medium">
                  <MapPin className="text-typography-main" size={14} />
                  Seoul, Korea
                </div>
                <div className="flex text-[12px] md:text-[14px] leading-[130%] items-center gap-1.5 font-medium">
                  <Mail className="text-typography-main" size={14} />
                  southpoley@gmail.com
                </div>
                <a
                  className="flex text-[12px] md:text-[14px] leading-[130%] items-center gap-1.5 font-medium underline md:no-underline md:hover:underline"
                  href="https://reconlabs.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Briefcase className="text-typography-main" size={14} />
                  @reconlabs
                </a>
              </div>
            </section>
          </div>

          <section className="text-[13px] leading-[160%] md:text-[16px] md:leading-[150%] font-medium text-typography-main">
            <p className="mb-5 md:mb-6">
              Hello, I am Namju Yun. I am a junior{" "}
              <EasyUnderlineWrapper show={true}>web front-end developer</EasyUnderlineWrapper> with a passion for
              continuous skill enhancement and delivering top-tier web services.
            </p>
            <p className="mb-5 md:mb-6">
              As a reliable and responsible developer, I hold myself accountable for ensuring all tasks are done without
              bugs and <EasyUnderlineWrapper show={true}>never allow deadlines to pass</EasyUnderlineWrapper> without
              all tasks achieved completely.
            </p>
            <p className="mb-5 md:mb-10">
              My ultimate goal is to <EasyUnderlineWrapper show={true}>create the optimal product</EasyUnderlineWrapper>
              . I prioritize the collective success of the project over personal convenience, consistently advocating
              for strategies that yield the best outcomes for the entire team and end-users.
            </p>
            <div>
              <div className="md:mb-1">My current passions</div>
              <ul className="ml-3.5 md:ml-5 list-outside">
                <li className="list-disc md:mb-1">Computer Science Studies (part-time college student!)</li>
                <li className="list-disc md:mb-1">Interactive Web animations, 3D (GSAP + three.js)</li>
                <li className="list-disc md:mb-1">Mobile app Development (React Native)</li>
              </ul>
            </div>
            <hr className="mt-8 mb-5 md:mt-8 border-border" />
            <div className="flex justify-end pb-6">
              <a className="font-normal text-[14px] md:text-[18px] leading-[150%] text-typography-main cursor-pointer">
                <EasyUnderlineWrapper>Download my resume →</EasyUnderlineWrapper>
              </a>
            </div>
          </section>
        </div>
      </main> */}
    </div>
  );
};

export default About;
