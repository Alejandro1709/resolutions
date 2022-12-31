import { useState } from 'react'
import useResolutions from '../hooks/useResolutions'
import type IResolution from '../types/resolution'

type ResolutionProps = {
  resolution: IResolution
}

function Resolution({ resolution }: ResolutionProps) {
  const { handleEditResolution, handleRemoveResolution } = useResolutions()

  const [value, setValue] = useState<string>('')
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isEdited, setIsEdited] = useState<boolean>(false)

  const handleConfirmEdition = () => {
    const resolutionToUpdate = { ...resolution, text: value }

    handleEditResolution(resolutionToUpdate)

    setIsEditing(false)

    setIsEdited(true)
  }

  return (
    <article className="flex flex-wrap justify-between items-center border border-slate-600 p-4 rounded-md cursor-pointer">
      <div className="flex gap-4 items-center">
        <div className="h-8 w-8 bg-slate-800 rounded-md"></div>
        {isEditing ? (
          <input
            className="bg-slate-800 text-slate-100 rounded-md px-2 py-1 outline-none"
            type="text"
            placeholder={resolution.text}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <h2 className="text-xl max-w-[400px] text-ellipsis">
            {isEdited ? value : resolution.text}
          </h2>
        )}
      </div>
      <div className="flex flex-row gap-2">
        {isEditing ? (
          <>
            <button
              className="flex-1 p-1 bg-slate-800 rounded-md hover:bg-slate-700 hover:scale-90 transition-all"
              onClick={() => setIsEditing(false)}
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              className="flex-1 p-1 bg-slate-800 rounded-md hover:bg-slate-700 hover:scale-90 transition-all"
              onClick={handleConfirmEdition}
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </>
        ) : (
          <>
            <button
              className="flex-1 p-1 bg-slate-800 rounded-md hover:bg-slate-700 hover:scale-90 transition-all"
              onClick={() => setIsEditing(true)}
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
          </>
        )}
      </div>
    </article>
  )
}

export default Resolution
