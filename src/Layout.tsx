import { useMemo, useState } from "react";
import { Link, useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { routes } from "./routes";
// import ViewTransitionExample from "./components/viewtransitionexample";

const Layout = () => {
  const location = useLocation();
  const isWelcome = useMemo(() => location.pathname === "/", [location]);
  const { nodeRef } = routes.find((route) => location.pathname.includes(route.path)) ?? {};
  const currentOutlet = useOutlet();

  const [isSplash, setIsSplash] = useState<boolean>(isWelcome);
  const [showContents, setShowContents] = useState<boolean>(!isWelcome);
  const [showSideNav, setSideNav] = useState<boolean>(!isWelcome);

  return (
    <>
      {/* Splash */}
      {isWelcome && showContents === false && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-dynamic font-montserrat">
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
      {isSplash === false && (
        <div
          className={`w-full h-dynamic p-6 font-montserrat animate-[fade_500ms_ease-in-out_800ms_forwards] opacity-0`}
        >
          <div
            className={`w-full h-full overflow-hidden ${
              showContents ? "border border-border-1" : "border border-transparent"
            } flex items-center justify-center`}
          >
            {/* Side Navigation */}
            {showSideNav && (
              <div className="w-[300px]">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/works">Works</Link>
                <Link to="/contacts">Contacts</Link>
              </div>
            )}

            {/* Animated Outlet */}
            {/* https://reactcommunity.org/react-transition-group/with-react-router/ */}
            {nodeRef !== undefined && (
              <SwitchTransition>
                <CSSTransition
                  key={location.pathname}
                  nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
                  timeout={700}
                  classNames="page"
                  unmountOnExit
                  onEnter={() => location.pathname !== "/" && setSideNav(true)}
                  onExited={() => location.pathname !== "/" && setSideNav(false)}
                >
                  {(state: string) => (
                    <div
                      ref={nodeRef as React.RefObject<HTMLDivElement>}
                      id={state}
                      className={`${isWelcome ? undefined : "w-[calc(100%_-_300px)]"} page`}
                    >
                      {currentOutlet}
                    </div>
                  )}
                </CSSTransition>
              </SwitchTransition>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
