import React, { useState } from 'react'
import PageLayout from '../components/PageLayout'
import Resolutions from '../components/Resolutions'
import type IResolution from '../types/resolution'

export default function Home() {
  const [resolutions, setResolutions] = useState<IResolution[]>([])

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

  const handleRemoveResolution = (resolution: IResolution) => {
    const filtered = resolutions.filter((resol) => resol.id !== resolution.id)
    setResolutions(filtered)
  }

  return (
    <PageLayout metaTitle="2023 resolutions | Home">
      <section className="max-w-screen-md text-slate-400 mx-auto">
        <Resolutions
          resolutions={resolutions}
          onRemove={handleRemoveResolution}
        />
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
