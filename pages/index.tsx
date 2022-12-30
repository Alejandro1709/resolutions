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
                <h2 className="text-xl">{resolution.text}</h2>
              </div>
              <div className="flex flex-row gap-2">
                <span className="flex-1">Edit</span>
                <span className="flex-1">Delete</span>
              </div>
            </article>
          ))}
        </div>
        <form
          className="flex flex-row gap-2 mx-16"
          onSubmit={handleAddNewResolution}
        >
          <input
            className="flex-1 bg-slate-800 text-slate-100 rounded-md px-4 py-2 mt-4 outline-none"
            type="text"
            placeholder="Learn how to fly a plane"
            value={newResolution}
            onChange={(e) => setNewResolution(e.target.value)}
          />
          <button className="bg-slate-800 text-slate-100 rounded-md px-4 py-2 mt-4 hover:bg-slate-700">
            Add new resolution
          </button>
        </form>
      </section>
    </PageLayout>
  )
}
