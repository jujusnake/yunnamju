import { ArrowRight } from "react-feather";
import { Link, useLocation } from "react-router-dom";

const SideNavigation = () => {
  const location = useLocation();

  return (
    <div className="max-[340px]:text-[14px] max-[340px]:gap-x-3 w-full flex text-[16px] py-5 leading-[26px] gap-x-5 gap-y-1 justify-center whitespace-nowrap md:w-auto md:px-6 md:flex-col md:h-full md:justify-start md:text-[18px] md:gap-y-4">
      <Link
        to="/"
        className={`relative hidden md:flex items-center gap-1 ${
          location.pathname === "/" ? "font-semibold -skew-x-[12deg]" : "hover:font-semibold hover:-skew-x-[12deg]"
        } group transition-all`}
      >
        <span className="after:content-['home'] after:block after:font-semibold after:invisible after:h-0">home</span>{" "}
        <ArrowRight size={12} className={location.pathname === "/home" ? "stroke-[3px]" : `group-hover:stroke-[3px]`} />
      </Link>
      <Link
        to="/about"
        className={`relative flex items-center gap-1 ${
          location.pathname === "/about" ? "font-semibold -skew-x-[12deg]" : "hover:font-semibold hover:-skew-x-[12deg]"
        } group transition-all`}
      >
        <span className="after:content-['about_me'] after:block after:font-semibold after:invisible after:h-0">
          about me
        </span>{" "}
        <ArrowRight
          size={12}
          className={location.pathname === "/about" ? "stroke-[3px]" : `group-hover:stroke-[3px]`}
        />
      </Link>
      <Link
        to="/works"
        className={`relative flex items-center gap-1 ${
          location.pathname === "/works" ? "font-semibold -skew-x-[12deg]" : "hover:font-semibold hover:-skew-x-[12deg]"
        } group transition-all`}
      >
        <span className="after:content-['works'] after:block after:font-semibold after:invisible after:h-0">works</span>
        <ArrowRight
          size={12}
          className={location.pathname === "/works" ? "stroke-[3px]" : `group-hover:stroke-[3px]`}
        />
      </Link>
      <Link
        to="/contacts"
        className={`relative flex items-center gap-1 ${
          location.pathname === "/contacts"
            ? "font-semibold -skew-x-[12deg]"
            : "hover:font-semibold hover:-skew-x-[12deg]"
        } group transition-all`}
      >
        <span className="after:content-['contact'] after:block after:font-semibold after:invisible after:h-0">
          contact
        </span>
        <ArrowRight
          size={12}
          className={location.pathname === "/contacts" ? "stroke-[3px]" : `group-hover:stroke-[3px]`}
        />
      </Link>
    </div>
  );
};

export default SideNavigation;
