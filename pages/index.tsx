import React, { useState } from 'react'
import PageLayout from '../components/PageLayout'
import ResolutionForm from '../components/ResolutionForm'
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
        <ResolutionForm
          input={newResolution}
          onInputChange={setNewResolution}
          onSubmit={handleAddNewResolution}
        />
      </section>
    </PageLayout>
  )
}
