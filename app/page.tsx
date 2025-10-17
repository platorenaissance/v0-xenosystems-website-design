"use client"

import { Clock } from "@/components/clock"

function ContactPanel() {
  return (
    <aside className="bg-[#000000] text-[#ffffff] h-full w-full flex items-end justify-end pb-4 sm:pb-6 md:pb-8 lg:pb-12">
      <div className="flex flex-col items-end gap-4 sm:gap-5 md:gap-6 p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="font-serif uppercase tracking-[0.2em] sm:tracking-[0.22em] md:tracking-[0.25em] text-[#ffffff] text-sm sm:text-base md:text-lg lg:text-2xl">
          {"[ XENOSYSTEMS ]"}
        </h1>
        <div className="flex flex-col items-end gap-1 sm:gap-1.5 md:gap-2">
          <p className="font-serif text-[#ffffff] text-[10px] sm:text-xs md:text-sm leading-5 sm:leading-6 text-right">
            {"HIRING: CAREERS@XENOSYSTEMS.XYZ"}
          </p>
          <p className="font-serif text-[#ffffff] text-[10px] sm:text-xs md:text-sm leading-5 sm:leading-6 text-right">
            {"PUBLIC RELATIONS: PR@XENOSYSTEMS.XYZ"}
          </p>
        </div>
      </div>
    </aside>
  )
}

export default function Page() {
  return (
    <main className="h-screen bg-[#000000] overflow-hidden">
      <Clock />

      <div className="flex h-full flex-col md:flex-row">
        <div className="relative h-[55vh] sm:h-[60vh] md:h-screen w-full overflow-hidden md:w-[900px] md:min-w-[900px] md:max-w-[900px] md:flex-none">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b320d6146785443.62b638bdd1a5f.gif-S6KI7Rd2wyo3u81FtQrSbkgz6s3xVT.jpeg"
            alt="Abstract halftone radial animation"
            className="h-full w-full object-cover transform-gpu will-change-transform brightness-110 contrast-150"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={900}
            height={900}
            draggable={false}
          />
        </div>
        <div className="h-full flex-1 min-h-[45vh] sm:min-h-[40vh] md:min-h-0">
          <ContactPanel />
        </div>
      </div>
    </main>
  )
}
