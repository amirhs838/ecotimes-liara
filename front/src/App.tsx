import DesktopPage from "./DesktopPage";
import DivScrollSpyContainer from "./imports/DivScrollSpyContainer";

export default function App() {
  return (
    <>
      <div className="flex min-h-screen h-full w-full justify-center bg-white lg:hidden" dir="ltr">
        <DivScrollSpyContainer />
      </div>
      <div className="hidden lg:block">
        <DesktopPage />
      </div>
    </>
  );
}
