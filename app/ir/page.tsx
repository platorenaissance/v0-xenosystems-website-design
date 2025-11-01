"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Download, FileText, Lock } from "lucide-react"

const documents = [
  {
    id: 1,
    title: "OUTREACH PROGRAM, SCOPES AND RELEVANT LINKS",
    filename: "OUTREACH PROGRAM, SCOPES AND RELEVANT LINKS.pdf",
  },
  {
    id: 2,
    title: "STRICTLY PRIVATE, CONFIDENTIAL AND LEGAL DISCLAIMER",
    filename: "STRICTLY PRIVATE, CONFIDENTIAL AND LEGAL DISCLAIMER.pdf",
  },
  {
    id: 3,
    title: "xenosystems",
    filename: "xenosystems.pdf",
  },
  {
    id: 4,
    title: "Xenosystems memo",
    filename: "Xenosystems memo.pdf",
  },
]

export default function IRPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "teleoplexy") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Incorrect password")
    }
  }

  const handleDownload = (filename: string) => {
    window.open(`/${filename}`, "_blank")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-zinc-950 border-zinc-800 p-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800">
              <Lock className="w-8 h-8 text-zinc-400" />
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-mono text-zinc-100 tracking-wider">[ XENOSYSTEMS ]</h1>
              <p className="text-sm text-zinc-500 font-mono">SECURE DATA ROOM ACCESS</p>
            </div>
            <form onSubmit={handlePasswordSubmit} className="w-full space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 font-mono"
                />
                {error && <p className="text-sm text-red-500 font-mono">{error}</p>}
              </div>
              <Button type="submit" className="w-full bg-zinc-100 text-black hover:bg-zinc-200 font-mono">
                ACCESS DATA ROOM
              </Button>
            </form>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-mono tracking-wider">[ XENOSYSTEMS ]</h1>
            <div className="text-sm font-mono text-zinc-500">DATA ROOM</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
            <h2 className="text-sm font-mono text-zinc-400 mb-6 tracking-wider">DOCUMENTS ({documents.length})</h2>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="p-5 rounded-lg border bg-zinc-950 border-zinc-800 hover:bg-zinc-900 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <FileText className="w-6 h-6 text-zinc-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-mono text-zinc-100 break-words">{doc.title}</p>
                        <p className="text-xs font-mono text-zinc-500 mt-1">{doc.filename}</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleDownload(doc.filename)}
                      className="flex-shrink-0 bg-zinc-100 text-black hover:bg-zinc-200 font-mono"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      VIEW
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-zinc-800 bg-zinc-950 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <div>© XENOSYSTEMS. ALL RIGHTS RESERVED.</div>
            <div className="flex gap-6">
              <a href="mailto:careers@xenosystems.xyz" className="hover:text-zinc-300 transition-colors">
                HIRING: CAREERS@XENOSYSTEMS.XYZ
              </a>
              <a href="mailto:pr@xenosystems.xyz" className="hover:text-zinc-300 transition-colors">
                PUBLIC RELATIONS: PR@XENOSYSTEMS.XYZ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
