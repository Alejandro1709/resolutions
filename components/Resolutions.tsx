import Resolution from './Resolution'
import type IResolution from '../types/resolution'

type ResolutionsProps = {
  resolutions: IResolution[]
  onRemove: (resolution: IResolution) => void
}

function Resolutions({ resolutions, onRemove }: ResolutionsProps) {
  return (
    <div className="flex flex-col gap-4 mx-16">
      {resolutions.map((resolution) => (
        <Resolution
          key={resolution.id}
          resolution={resolution}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default Resolutions
