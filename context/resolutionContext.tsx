import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
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
