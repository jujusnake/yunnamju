import { useMemo, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import PicturePngWebp from "../components/PicturePngWebp";
import { WORKS_PERSONAL, WORKS_PROFESSIONAL, WorkItem } from "../constants/works";
import { ExternalLink } from "react-feather";

const Works = () => {
  const [currTab, setCurrTab] = useState<"professional" | "personal">("professional");

  const workList = useMemo(() => (currTab === "personal" ? WORKS_PERSONAL : WORKS_PROFESSIONAL), [currTab]);

  return (
    <Scrollbars autoHide>
      <main className="px-6 pb-6 text-typo-main md:p-12">
        <div className="flex items-center gap-5 mb-[18px] md:gap-6 md:mb-7">
          <button
            className={`relative text-[16px] leading-[150%] after:content-['Professional'] after:block after:font-semibold after:invisible after:h-0 ${
              currTab === "professional" ? "font-semibold" : "font-normal group"
            } transition-[font-weight] duration-300 md:text-[18px]`}
            onClick={() => setCurrTab("professional")}
          >
            Professional
            <hr
              className={`absolute bottom-0 left-0 border-typo-main border-b-0 group-hover:w-full ${
                currTab === "professional" ? "w-full" : "w-0"
              } transition-[width] duration-300`}
            />
          </button>
          <button
            className={`relative text-[16px] leading-[150%] after:content-['Personal'] after:block after:font-semibold after:invisible after:h-0 ${
              currTab === "personal" ? "font-semibold" : "font-normal group"
            } transition-[font-weight] duration-300 md:text-[18px]`}
            onClick={() => setCurrTab("personal")}
          >
            Personal
            <hr
              className={`absolute bottom-0 left-0 border-typo-main border-b-0 group-hover:w-full ${
                currTab === "personal" ? "w-full" : "w-0"
              } transition-[width] duration-300`}
            />
          </button>
        </div>

        <aside className="text-[12px] leading-[150%] text-typo-light border-b border-border-1 pb-[3px]">
          *from newest to oldest
        </aside>

        <section>
          {workList.map((work) => (
            <WorksBlock item={work} key={`work-item-${currTab}-${work.title}`} />
          ))}
        </section>
      </main>
    </Scrollbars>
  );
};

export default Works;

const WorksBlock = ({ item }: { item: WorkItem }) => {
  return (
    <article className="grid grid-cols-1 py-6 border-b border-border-1 last:border-b-0 md:py-9 md:grid-cols-[repeat(2,_auto)] md:grid-rows-2 md:justify-between md:gap-x-3">
      <div>
        <h1>
          <a
            className="font-semibold text-[16px] leading-[150%] mb-0.5 md:text-[20px] flex items-center gap-2 data-[link='true']:underline data-[link='true']:md:no-underline data-[link='true']:md:hover:underline data-[link='true']:underline-offset-2"
            data-link={item.link !== undefined}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
            {item.link && <ExternalLink size={18} />}
          </a>
        </h1>
        <div className="text-[12px] leading-[150%] font-light flex items-center gap-3 mb-3 md:gap-4 md:text-[14px] md:mb-1">
          {item.sub.map((subItem) => (
            <div key={`${item.title}-sub-${subItem}`}>{subItem}</div>
          ))}
        </div>
      </div>
      <PicturePngWebp
        src={item.src}
        alt={item.alt}
        wrapperClassName="md:row-span-2"
        className="object-cover mb-3 aspect-video md:w-[338px] md:aspect-[22/10] md:h-full md:mb-0"
      />
      <p className="font-medium text-[13px] leading-[150%] md:text-[16px] md:self-end">{item.desc}</p>
    </article>
  );
};
