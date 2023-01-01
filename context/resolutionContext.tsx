import React, { createContext, SetStateAction, useState } from 'react'
import type IResolution from '../types/resolution'

type ResolutionProviderProps = {
  children: React.ReactNode
}

type ResolutionContextProps = {
  resolutions: IResolution[]
  newResolution: string
  setResolutions: React.Dispatch<SetStateAction<IResolution[]>>
  setNewResolution: React.Dispatch<SetStateAction<string>>
  handleAddNewResolution: (e: React.FormEvent<HTMLFormElement>) => void
  handleEditResolution: (resolution: IResolution) => void
  handleRemoveResolution: (resolution: IResolution) => void
}

export const ResolutionContext = createContext<ResolutionContextProps>({
  resolutions: [],
  newResolution: '',
  setResolutions: () => {},
  setNewResolution: () => {},
  handleAddNewResolution: () => {},
  handleEditResolution: () => {},
  handleRemoveResolution: () => {},
})

function ResolutionProvider({ children }: ResolutionProviderProps) {
  const [resolutions, setResolutions] = useState<IResolution[]>([])
  const [newResolution, setNewResolution] = useState<string>('')

  const handleAddNewResolution = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()
    if (newResolution) {
      try {
        const res = await fetch('/api/resolutions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: newResolution }),
        })

        const data = await res.json()

        if (!data.success) {
          throw new Error(data.message)
        }

        console.log(data)

        setResolutions((prevResolutions) => [
          ...prevResolutions,
          { id: prevResolutions.length + 1, text: newResolution },
        ])

        setNewResolution('')
      } catch (error) {
        console.error(error)
      }
    }
  }

  const handleEditResolution = async (resolution: IResolution) => {
    try {
      const res = await fetch(`/api/resolutions/${resolution.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: resolution.text }),
      })

      const data = await res.json()

      if (!data.success) {
        throw new Error(data.message)
      }

      console.log(data)

      setResolutions((prevResolutions) =>
        prevResolutions.map((resol) =>
          resol.id === resolution.id ? resolution : resol,
        ),
      )
    } catch (error) {
      console.error(error)
    }
  }

  const handleRemoveResolution = async (resolution: IResolution) => {
    try {
      const res = await fetch(`/api/resolutions/${resolution.id}`, {
        method: 'DELETE',
      })

      const data = await res.json()

      if (!data.success) {
        throw new Error(data.message)
      }

      console.log(data)

      setResolutions((prevResolutions) =>
        prevResolutions.filter((resol) => resol.id !== resolution.id),
      )
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <ResolutionContext.Provider
      value={{
        resolutions,
        newResolution,
        setResolutions,
        setNewResolution,
        handleAddNewResolution,
        handleEditResolution,
        handleRemoveResolution,
      }}
    >
      {children}
    </ResolutionContext.Provider>
  )
}

export { ResolutionProvider }
