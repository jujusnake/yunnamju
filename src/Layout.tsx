import { useState } from "react";
import { Link, useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { routes } from "./routes";

const Layout = () => {
  const location = useLocation();
  const { nodeRef } = routes.find((route) => location.pathname.includes(route.path)) ?? {};
  const currentOutlet = useOutlet();

  const [isSplash, setIsSplash] = useState<boolean>(true);
  const [showContents, setShowContents] = useState<boolean>(false);

  return (
    <>
      {/* Splash */}
      {showContents === false && (
        <div className="fixed top-0 left-0 w-full h-dynamic flex items-center justify-center z-50 font-montserrat">
          <div
            className={`w-[calc(100vw_-_48px)] h-[calc(100vh_-_48px)] flex flex-col items-center justify-center ${
              isSplash ? "gap-6 md:gap-8" : "gap-0"
            } transition-[gap] duration-1000 delay-500`}
          >
            <div
              className={`${
                isSplash ? "w-8 h-8 md:w-[42px] md:h-[42px] rotate-45" : "w-full h-full rotate-0"
              } shadow-[0_0_0_300vw] shadow-layer-back transition-all duration-[1500ms] delay-500 ease-in-out pointer-events-none`}
              onTransitionEnd={() => setShowContents(true)}
              onAnimationEnd={() => setIsSplash(false)}
            >
              <div className="border-border-1 border w-full h-full animate-[spin_1.5s_ease-in-out]" />
            </div>
            <div
              className={`text-sm md:text-lg text-center overflow-hidden z-10 text-typo-light transition-all duration-500 ${
                isSplash ? "visible scale-100  max-h-[100px]" : "invisible max-h-0"
              }`}
            >
              Namju Yun
              <br />
              Front-end Developer
            </div>
          </div>
        </div>
      )}

      {/* Contents */}
      <div className={`w-full h-dynamic p-6 font-montserrat`}>
        <div
          className={`w-full h-full overflow-hidden ${
            showContents ? "border border-border-1" : "border border-transparent"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/works">Works</Link>
          <Link to="/contacts">Contacts</Link>

          {/* https://reactcommunity.org/react-transition-group/with-react-router/ */}
          <div className="relative">
            {nodeRef !== undefined && (
              <SwitchTransition>
                <CSSTransition
                  key={location.pathname}
                  nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
                  timeout={700}
                  classNames="page"
                  unmountOnExit
                >
                  {(state: string) => (
                    <div ref={nodeRef as React.RefObject<HTMLDivElement>} id={state} className="page">
                      {currentOutlet}
                    </div>
                  )}
                </CSSTransition>
              </SwitchTransition>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
