import React from "react";

type Props = { show?: boolean | "auto"; children: React.ReactNode };

const EasyUnderlineWrapper = ({ show = "auto", children }: Props) => {
  return (
    <span
      className={`${show === "auto" && "bg-[length:0%_6px] hover:bg-[length:100%_6px]"}`}
      style={{
        backgroundImage: "linear-gradient(rgba(35, 101, 228, 0.2), rgba(35, 101, 228, 0.2))",
        backgroundPosition: "0% 100%",
        backgroundRepeat: "no-repeat",
        transition: "background-size .5s",
        ...(show !== "auto" ? { backgroundSize: show === true ? "100% 6px" : "0% 6px" } : {}),
      }}
    >
      {children}
    </span>
  );
};

export default EasyUnderlineWrapper;
