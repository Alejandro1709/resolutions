import useResolutions from '../hooks/useResolutions'

function ResolutionForm() {
  const { newResolution, setNewResolution, handleAddNewResolution } =
    useResolutions()

  return (
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
  )
}

export default ResolutionForm
