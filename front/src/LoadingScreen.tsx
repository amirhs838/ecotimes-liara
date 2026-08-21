import imgLogo from "./imports/DivScrollSpyContainer/logo.png";

export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-7 bg-white">
      <img
        alt="ECO TIMES"
        className="h-[88px] w-[88px] rounded-[10px] object-cover"
        src={imgLogo}
      />
      <div className="size-10 animate-spin rounded-full border-4 border-[#c93035] border-t-transparent" />
    </div>
  );
}