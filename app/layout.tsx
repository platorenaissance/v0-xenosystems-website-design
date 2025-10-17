import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "XENOSYSTEMS",
  description: "Monochrome landing",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="preload"
          as="image"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b320d6146785443.62b638bdd1a5f.gif-DNaati7mLaphpmigzhUIuSv842V3D9.jpeg"
          // Note: Preloading helps ensure the GIF decodes early for smooth first playback.
        />
        <link rel="preconnect" href="https://blob.v0.app" />
        <link
          rel="preload"
          as="image"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b320d6146785443.62b638bdd1a5f.gif-iQsHJ0p2aptrZssGXgdgPPkIID83f8.jpeg"
        />
        <link
          rel="preload"
          as="image"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b320d6146785443.62b638bdd1a5f.gif-S6KI7Rd2wyo3u81FtQrSbkgz6s3xVT.jpeg"
        />
        <link
          rel="preload"
          as="image"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b320d6146785443.62b638bdd1a5f.gif-DNaati7mLaphpmigzhUIuSv842V3D9.jpeg"
          // Note: Preloading helps ensure the GIF decodes early for smooth first playback.
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
