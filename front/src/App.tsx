import { useEffect, useState } from "react";
import DesktopPage from "./DesktopPage";
import DivScrollSpyContainer from "./imports/DivScrollSpyContainer";
import LoadingScreen from "./LoadingScreen";
import { useHomeData, useHomeFailed } from "./lib/use-home-data";

const MOBILE_BASE_WIDTH = 390;

function MobileFrame() {
  const [scale, setScale] = useState(1);
  const home = useHomeData();
  const failed = useHomeFailed();
  useEffect(() => {
    const update = () => {
      const w = document.documentElement.clientWidth;
      setScale(w < 1024 ? w / MOBILE_BASE_WIDTH : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  if (!home && !failed) {
    return (
      <div className="lg:hidden">
        <LoadingScreen />
      </div>
    );
  }
  return (
    <div className="flex min-h-screen h-full w-full justify-center bg-white lg:hidden" dir="ltr">
      <div style={{ width: MOBILE_BASE_WIDTH, zoom: scale }}>
        <DivScrollSpyContainer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* SEO: Primary H1 for brand — hidden visually, visible to search engines */}
      <h1 className="sr-only">اکو تایمز</h1>
      <MobileFrame />
      <div className="hidden lg:block">
        <DesktopPage />
      </div>
    </>
  );
}
