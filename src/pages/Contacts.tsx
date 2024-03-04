import Scrollbars from "react-custom-scrollbars-2";
import { GitHub, Linkedin, Mail } from "react-feather";

const Contacts = () => {
  return (
    <Scrollbars autoHide>
      <main className="h-full">
        <div className="relative flex flex-col items-center w-full min-h-full px-6 pt-20 pb-16 md:px-12 md:pt-12 md:justify-center">
          <p className="font-medium text-[14px] leading-6 mb-10 text-center md:text-[20px] md:leading-[32px] md:mb-[60px] text-typo-main">
            Hit me up!
            <br />I am open to anything
            <br />
            coffee, drinks, party... and job offers!
          </p>

          <div className="flex flex-col items-center gap-2 md:gap-3">
            <a className="flex items-center gap-2 md:gap-3" href="https://github.com/jujusnake" target="_blank">
              <GitHub className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
              <span className="underline text-typo-main font-medium text-[14px] leading-[24px] md:text-[16px]">
                github
              </span>
            </a>
            <a
              className="flex items-center gap-2 md:gap-3"
              href="https://www.linkedin.com/in/namju-yun/"
              target="_blank"
            >
              <Linkedin className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
              <span className="underline text-typo-main font-medium text-[14px] leading-[24px] md:text-[16px]">
                linkedin
              </span>
            </a>
            <a className="flex items-center gap-2 md:gap-3" href="mailto:southpoley@gmail.com">
              <Mail className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
              <span className="underline text-typo-main font-medium text-[14px] leading-[24px] md:text-[16px]">
                southpoley@gmail.com
              </span>
            </a>
          </div>

          <aside className="pl-2 text-end text-[10px] leading-[16px] text-border font-medium absolute bottom-1.5 right-2">
            web{" "}
            <a className="underline" href="https://www.figma.com/file/AEuUcJyQeJj8JJfUORePii/Portfolio" target="_blank">
              designed
            </a>{" "}
            and{" "}
            <a className="underline" href="https://github.com/jujusnake/yunnamju" target="_blank">
              created
            </a>{" "}
            by Yun, Namju. 2024.
          </aside>
        </div>
      </main>
    </Scrollbars>
  );
};

export default Contacts;
