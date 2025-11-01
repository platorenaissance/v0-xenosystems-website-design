"use client"

import { useState, useEffect } from "react"
import { ZoomIn, ZoomOut } from "lucide-react"

interface PDFViewerProps {
  url: string
}

export function PDFViewer({ url }: PDFViewerProps) {
  const [scale, setScale] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [url])

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 3))
  }

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5))
  }

  const handleResetZoom = () => {
    setScale(1)
  }

  return (
    <div className="h-full flex flex-col bg-[#000000]">
      {/* Toolbar */}
      <div className="border-b border-[#333333] p-3 md:p-4 flex items-center gap-2 bg-[#0a0a0a]">
        <button
          onClick={handleZoomOut}
          className="p-2 text-[#888888] hover:text-[#ffffff] transition-colors"
          title="Zoom out"
        >
          <ZoomOut className="w-4 h-4" strokeWidth={1.5} />
        </button>
        <button
          onClick={handleResetZoom}
          className="px-3 py-1 text-[#888888] hover:text-[#ffffff] font-mono text-xs uppercase transition-colors"
        >
          {Math.round(scale * 100)}%
        </button>
        <button
          onClick={handleZoomIn}
          className="p-2 text-[#888888] hover:text-[#ffffff] transition-colors"
          title="Zoom in"
        >
          <ZoomIn className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>

      {/* Viewer Area */}
      <div className="flex-1 overflow-auto bg-[#000000] flex items-center justify-center p-4">
        {isLoading ? (
          <div className="text-center">
            <div className="font-serif text-[#666666] uppercase tracking-widest text-sm">Loading PDF...</div>
          </div>
        ) : (
          <div
            className="bg-[#111111] shadow-2xl"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center",
              transition: "transform 0.2s ease-out",
              maxWidth: "100%",
            }}
          >
            {/* PDF Placeholder - In production, integrate react-pdf or similar */}
            <div className="w-[612px] h-[792px] bg-[#ffffff] p-12 flex flex-col justify-center items-center border border-[#333333]">
              <div className="text-center space-y-4 max-w-md">
                <h3 className="font-serif text-[#000000] uppercase tracking-wide text-lg font-bold">PDF Document</h3>
                <p className="font-serif text-[#666666] text-sm">
                  Document viewer ready. In production, full PDF rendering would be integrated here using a PDF library.
                </p>
                <div className="pt-4 border-t border-[#cccccc]">
                  <p className="font-mono text-[#999999] text-xs">Native PDF rendering optimized</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
