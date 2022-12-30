import React, { useState } from 'react'
import PageLayout from '../components/PageLayout'

interface Resolution {
  id: number
  text: string
}

export default function Home() {
  const [resolutions, setResolutions] = useState<Resolution[]>([])

  const [newResolution, setNewResolution] = useState('')

  const handleAddNewResolution = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newResolution) {
      setResolutions((prevResolutions) => [
        ...prevResolutions,
        { id: prevResolutions.length + 1, text: newResolution },
      ])
      setNewResolution('')
    }
  }

  const handleRemoveResolution = (resolution: Resolution) => {
    const filtered = resolutions.filter((resol) => resol.id !== resolution.id)
    setResolutions(filtered)
  }

  return (
    <PageLayout metaTitle="2023 resolutions | Home">
      <section className="max-w-screen-md text-slate-400 mx-auto">
        <div className="flex flex-col gap-4 mx-16">
          {resolutions.map((resolution) => (
            <article
              key={resolution.id}
              className="flex flex-wrap justify-between items-center border border-slate-600 p-4 rounded-md cursor-pointer"
            >
              <div className="flex gap-4 items-center">
                <div className="h-8 w-8 bg-slate-800 rounded-md"></div>
                <h2 className="text-xl max-w-[400px] text-ellipsis">
                  {resolution.text}
                </h2>
              </div>
              <div className="flex flex-row gap-2">
                <button className="flex-1 p-1 bg-slate-800 rounded-md hover:bg-slate-700 hover:scale-90 transition-all">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button
                  className="flex-1 p-1 bg-slate-800 rounded-md hover:bg-slate-700 hover:scale-90 transition-all"
                  onClick={() => handleRemoveResolution(resolution)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
        <form
          className="flex flex-row gap-2 mx-16 shadow-sm"
          onSubmit={handleAddNewResolution}
        >
          <input
            className="flex-1 bg-slate-800 text-slate-100 rounded-md px-4 py-2 mt-4 outline-none"
            type="text"
            placeholder="Learn how to fly a plane"
            value={newResolution}
            onChange={(e) => setNewResolution(e.target.value)}
          />
          <button className="bg-slate-800 text-slate-100 rounded-md px-4 md:py-2 mt-4 hover:bg-slate-700 hover:scale-90 transition-all">
            Add
          </button>
        </form>
      </section>
    </PageLayout>
  )
}
