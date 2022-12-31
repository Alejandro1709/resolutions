import Resolution from './Resolution'
import type IResolution from '../types/resolution'

type ResolutionsProps = {
  resolutions: IResolution[]
  onEdit: (resolution: IResolution) => void
  onRemove: (resolution: IResolution) => void
}

function Resolutions({ resolutions, onEdit, onRemove }: ResolutionsProps) {
  return (
    <div className="flex flex-col gap-4 mx-16">
      {resolutions.map((resolution) => (
        <Resolution
          key={resolution.id}
          resolution={resolution}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default Resolutions
