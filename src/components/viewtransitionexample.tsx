import { useState } from "react";
import { flushSync } from "react-dom";

const ViewTransitionExample = () => {
  const [isThumbnail, setIsThumbnail] = useState<boolean>(true);

  const handleMove = () => {
    if (!document.startViewTransition) {
      setIsThumbnail((prev) => !prev);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setIsThumbnail((prev) => !prev);
      });
    });
  };

  return (
    <>
      {/* https://malcolmkee.com/blog/view-transition-api-in-react-app/ */}
      <button onClick={handleMove}>asdffsdf</button>

      {isThumbnail && (
        <div className="flex gap-3 cat-img">
          <div className="vt-btn-1">Button1</div>
          <div className="vt-btn-2">Button2</div>
          <div className="vt-btn-3">Button3</div>
        </div>
      )}

      {!isThumbnail && (
        <div className="fixed flex flex-col gap-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cat-img">
          <div className="vt-btn-1">Button1</div>
          <div className="vt-btn-2">Button2</div>
          <div className="vt-btn-3">Button3</div>
        </div>
      )}
    </>
  );
};

export default ViewTransitionExample;
