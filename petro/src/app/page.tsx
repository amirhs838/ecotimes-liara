import { redirect, RedirectType } from "next/navigation";

// The standalone Next.js frontend has been superseded by the Vite frontend
// (ecotimes-front.vercel.app). The backend keeps serving /api, /admin, /news,
// /category and media only; the root now forwards visitors (e.g. the admin's
// "مشاهده سایت" link) straight to the new frontend.
export default function Home() {
  redirect("https://ecotimes-front.vercel.app", RedirectType.replace);
}
