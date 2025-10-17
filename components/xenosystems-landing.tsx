export default function XenosystemsLanding() {
  return (
    <main className="h-screen w-screen bg-black text-white" aria-label="XENOSYSTEMS landing">
      <section className="flex h-full w-full flex-col md:flex-row">
        {/* Left media: exactly 900px wide on desktop, full width on mobile */}
        <div className="relative h-[50vh] w-full overflow-hidden md:h-full md:basis-[900px] md:shrink-0">
          {/* Animated image (use Source URL exactly). Object-cover ensures clean fill. */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b320d6146785443.62b638bdd1a5f.gif-DNaati7mLaphpmigzhUIuSv842V3D9.jpeg"
            alt="Abstract halftone radial animation"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* Right panel: fills remaining width; content bottom-right aligned */}
        <div className="relative flex h-full flex-1 bg-black">
          <div className="mt-auto flex w-full flex-col items-end gap-4 px-6 py-8 md:px-10 md:py-12">
            {/* Single typeframe only */}
            <h1 className="font-serif text-lg tracking-[0.35em] uppercase">{"[ XENOSYSTEMS ]"}</h1>

            <div className="text-right text-xs md:text-sm leading-relaxed">
              <p className="font-serif tracking-wider">HIRING: CAREERS@XENOSYSTEMS.XYZ</p>
              <p className="font-serif tracking-wider">PUBLIC RELATIONS: PR@XENOSYSTEMS.XYZ</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
