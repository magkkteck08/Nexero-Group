import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between text-[#1E1B2E]">
      <Navbar />
      <main className="mx-auto max-w-xl px-4 py-20 text-center">
        <div className="nb-card bg-[#FEF0B6] p-8 sm:p-10 space-y-5">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#1E1B2E] bg-white shadow-[0_3px_0_0_#1E1B2E]">
            <Compass className="h-7 w-7 text-[#3E735E]" />
          </div>
          <span className="inline-block rounded-full border-2 border-[#1E1B2E] bg-white px-3 py-0.5 text-xs font-black uppercase">
            Error 404 · Route Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1E1B2E]">
            This Wing Doesn&apos;t Exist Yet.
          </h1>
          <p className="text-xs sm:text-sm font-medium text-[#4A4857]">
            The page you are looking for has moved or is not part of the Nexora Group directory.
          </p>
          <div className="pt-2">
            <Link href="/" className="nb-btn-primary text-xs sm:text-sm">
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Nexora Headquarters</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}