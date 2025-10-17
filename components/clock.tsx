"use client"

import { useEffect, useState } from "react"

export function Clock() {
  const [time, setTime] = useState({ ny: "00:00:00", hk: "00:00:00" })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const updateTime = () => {
      const now = new Date()

      // New York time (EST/EDT)
      const nyTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }))
      const nyHours = String(nyTime.getHours()).padStart(2, "0")
      const nyMinutes = String(nyTime.getMinutes()).padStart(2, "0")
      const nySeconds = String(nyTime.getSeconds()).padStart(2, "0")

      // Hong Kong time
      const hkTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Hong_Kong" }))
      const hkHours = String(hkTime.getHours()).padStart(2, "0")
      const hkMinutes = String(hkTime.getMinutes()).padStart(2, "0")
      const hkSeconds = String(hkTime.getSeconds()).padStart(2, "0")

      setTime({
        ny: `${nyHours}:${nyMinutes}:${nySeconds}`,
        hk: `${hkHours}:${hkMinutes}:${hkSeconds}`,
      })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-4 right-4 sm:top-5 sm:right-5 md:top-8 md:right-8 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12 font-serif text-[#ffffff] text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.12em] sm:tracking-[0.15em] z-10">
      <div className="whitespace-nowrap">NEW YORK {time.ny}</div>
      <div className="whitespace-nowrap">HONG KONG {time.hk}</div>
    </div>
  )
}
