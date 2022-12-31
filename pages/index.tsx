import React, { useState, useEffect } from 'react'
import PageLayout from '../components/PageLayout'
import ResolutionForm from '../components/ResolutionForm'
import Resolutions from '../components/Resolutions'
import type IResolution from '../types/resolution'

export default function Home() {
  const [resolutions, setResolutions] = useState<IResolution[]>([])
  const [newResolution, setNewResolution] = useState('')

  useEffect(() => {
    setResolutions(JSON.parse(localStorage.getItem('resolutions') || '[]'))
  }, [])

  const handleAddNewResolution = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newResolution) {
      localStorage.setItem(
        'resolutions',
        JSON.stringify([
          ...resolutions,
          { id: resolutions.length + 1, text: newResolution },
        ]),
      )

      setResolutions((prevResolutions) => [
        ...prevResolutions,
        { id: prevResolutions.length + 1, text: newResolution },
      ])
      setNewResolution('')
    }
  }

  const handleEditResolution = (resolution: IResolution) => {
    const resolutionsFromStorage: IResolution[] = JSON.parse(
      localStorage.getItem('resolutions') || '[]',
    )
    const resolutionFromStorage: IResolution | undefined =
      resolutionsFromStorage.find((resol) => resol.id === resolution.id)

    if (!resolutionFromStorage) return

    resolutionFromStorage.text = resolution.text

    resolutions.splice(
      resolutions.indexOf(resolutionFromStorage),
      1,
      resolutionFromStorage,
    )

    localStorage.setItem('resolutions', JSON.stringify(resolutions))

    setResolutions(resolutions)
  }

  const handleRemoveResolution = (resolution: IResolution) => {
    const filtered = resolutions.filter((resol) => resol.id !== resolution.id)
    localStorage.setItem('resolutions', JSON.stringify(filtered))
    setResolutions(filtered)
  }

  return (
    <PageLayout metaTitle="2023 resolutions | Home">
      <section className="max-w-screen-md text-slate-400 mx-auto">
        <Resolutions
          resolutions={resolutions}
          onEdit={handleEditResolution}
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
