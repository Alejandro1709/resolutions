import Resolution from './Resolution'
import useResolutions from '../hooks/useResolutions'

function Resolutions() {
  const { resolutions } = useResolutions()

  return (
    <div className="flex flex-col gap-4 mx-16">
      {resolutions.map((resolution) => (
        <Resolution key={resolution.id} resolution={resolution} />
      ))}
    </div>
  )
}

export default Resolutions
