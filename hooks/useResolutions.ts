import { useContext } from 'react'
import { ResolutionContext } from '../context/resolutionContext'

export default function useResolutions() {
  return useContext(ResolutionContext)
}
