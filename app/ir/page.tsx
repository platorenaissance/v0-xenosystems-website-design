"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Lock, Download, X } from "lucide-react"
import { PDFViewer } from "@/components/pdf-viewer"

interface Document {
  id: string
  title: string
  filename: string
  url: string
}

const DOCUMENTS: Document[] = [
  {
    id: "outreach",
    title: "OUTREACH PROGRAM, SCOPES AND RELEVANT LINKS",
    filename: "outreach.pdf",
    url: "#outreach",
  },
  {
    id: "disclaimer",
    title: "STRICTLY PRIVATE, CONFIDENTIAL AND LEGAL DISCLAIMER",
    filename: "disclaimer.pdf",
    url: "#disclaimer",
  },
  {
    id: "deck",
    title: "XENOSYSTEMS DECK",
    filename: "xenosystems-deck.pdf",
    url: "#deck",
  },
  {
    id: "memo",
    title: "XENOSYSTEMS MEMO",
    filename: "xenosystems-memo.pdf",
    url: "#memo",
  },
]

const PASSWORD = "teleoplexy"

function PasswordGate() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      if (password === PASSWORD) {
        localStorage.setItem("ir-access", "true")
        window.location.reload()
      } else {
        setError("Invalid password")
        setPassword("")
        setIsLoading(false)
      }
    }, 300)
  }

  return (
    <main className="h-screen bg-[#000000] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <Lock className="w-12 h-12 text-[#ffffff]" strokeWidth={1.5} />
            <h1 className="font-serif uppercase tracking-[0.2em] text-[#ffffff] text-xl md:text-2xl">
              {"[ XENOSYSTEMS ]"}
            </h1>
            <p className="font-serif text-[#ffffff] text-sm md:text-base tracking-wide uppercase">
              Investment Relations
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-serif text-[#ffffff] text-xs md:text-sm uppercase tracking-widest">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError("")
                }}
                placeholder="Enter password"
                className="bg-[#ffffff] text-[#000000] px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#ffffff]"
                disabled={isLoading}
              />
              {error && <p className="font-serif text-red-500 text-xs uppercase tracking-wide">{error}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading || !password}
              className="bg-[#ffffff] text-[#000000] px-6 py-3 font-serif uppercase tracking-widest text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#f0f0f0] transition-colors"
            >
              {isLoading ? "Accessing..." : "Access Dataroom"}
            </button>
          </form>

          <p className="font-serif text-[#999999] text-[10px] md:text-xs text-center uppercase tracking-wide max-w-xs">
            This dataroom contains confidential and proprietary information. Unauthorized access is prohibited.
          </p>
        </div>
      </div>
    </main>
  )
}

function DataroomContent() {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("ir-access")
    window.location.reload()
  }

  const handleDownload = async (doc: Document) => {
    setIsLoading(true)
    try {
      // In a real implementation, you would fetch from your backend
      // For now, this simulates the download trigger
      const link = document.createElement("a")
      link.href = doc.url
      link.download = doc.filename
      link.click()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="h-screen bg-[#000000] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-[#333333] p-4 md:p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="font-serif uppercase tracking-[0.2em] text-[#ffffff] text-lg md:text-xl">
            {"[ XENOSYSTEMS ]"}
          </h1>
          <p className="font-serif text-[#888888] text-xs md:text-sm uppercase tracking-widest hidden sm:block">
            Investment Relations Dataroom
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="text-[#ffffff] hover:text-[#cccccc] transition-colors p-2"
          title="Logout"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Document List */}
        <aside className="w-full md:w-80 border-r border-[#333333] overflow-y-auto bg-[#050505]">
          <div className="p-4 md:p-6 space-y-2">
            {DOCUMENTS.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setSelectedDoc(doc)}
                className={`w-full text-left p-3 md:p-4 font-serif text-xs md:text-sm uppercase tracking-wide transition-colors ${
                  selectedDoc?.id === doc.id
                    ? "bg-[#ffffff] text-[#000000]"
                    : "text-[#cccccc] hover:text-[#ffffff] hover:bg-[#1a1a1a]"
                }`}
              >
                <span className="line-clamp-2">{doc.title}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content - PDF Viewer */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {selectedDoc ? (
            <>
              <div className="border-b border-[#333333] p-4 md:p-6 flex items-center justify-between bg-[#0a0a0a]">
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-[#ffffff] text-sm md:text-base uppercase tracking-wide line-clamp-2">
                    {selectedDoc.title}
                  </h2>
                </div>
                <button
                  onClick={() => handleDownload(selectedDoc)}
                  disabled={isLoading}
                  className="ml-4 text-[#ffffff] hover:text-[#cccccc] transition-colors p-2 disabled:opacity-50"
                  title="Download PDF"
                >
                  <Download className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex-1 overflow-auto">
                <PDFViewer url={selectedDoc.url} />
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="font-serif text-[#666666] text-sm uppercase tracking-widest">Select a document to view</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default function IRPage() {
  const [hasAccess, setHasAccess] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const access = localStorage.getItem("ir-access")
    setHasAccess(access === "true")
    setIsChecking(false)
  }, [])

  if (isChecking) {
    return (
      <main className="h-screen bg-[#000000] flex items-center justify-center">
        <div className="font-serif text-[#666666] uppercase tracking-widest text-sm">Loading...</div>
      </main>
    )
  }

  return hasAccess ? <DataroomContent /> : <PasswordGate />
}
