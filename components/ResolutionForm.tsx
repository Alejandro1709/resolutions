import { Dispatch, FormEvent, SetStateAction } from 'react'

type ResolutionFormProps = {
  input: string
  onInputChange: Dispatch<SetStateAction<string>>
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

function ResolutionForm({
  input,
  onInputChange,
  onSubmit,
}: ResolutionFormProps) {
  return (
    <form className="flex flex-row gap-2 mx-16 shadow-sm" onSubmit={onSubmit}>
      <input
        className="flex-1 bg-slate-800 text-slate-100 rounded-md px-4 py-2 mt-4 outline-none"
        type="text"
        placeholder="Learn how to fly a plane"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button className="bg-slate-800 text-slate-100 rounded-md px-4 md:py-2 mt-4 hover:bg-slate-700 hover:scale-90 transition-all">
        Add
      </button>
    </form>
  )
}

export default ResolutionForm
