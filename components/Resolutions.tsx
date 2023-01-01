import Resolution from './Resolution'
import type IResolution from '../types/resolution'

type ResolutionsProps = {
  resolutions: IResolution[]
}

function Resolutions({ resolutions }: ResolutionsProps) {
  return (
    <div className="flex flex-col gap-4 mx-16">
      {resolutions && resolutions.length > 0
        ? resolutions.map((resolution) => (
            <Resolution key={resolution.id} resolution={resolution} />
          ))
        : null}
    </div>
  )
}

export default Resolutions
