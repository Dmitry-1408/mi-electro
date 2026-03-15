import './SegmentedControl.scss'
import { useState } from 'react'
import SegmentedControlItem from "@/components/SegmentedControlItem";

const SegmentedControl = (props) => {
  const {
    type = 'button',
  } = props

  const [activeMode, setActiveMode] = useState('white')

  const modes = [
    { mode: 'white', label: 'Белый' },
    { mode: 'black', label: 'Черный' }
  ]

  return (
    <div className="segmented-control">
      {modes.map(({ mode, label }) => (
        <SegmentedControlItem
          key={mode}
          mode={mode}
          label={label}
          isActive={activeMode === mode}
          onClick={() => setActiveMode(mode)}
        />
      ))}
    </div>
  )
}

export default SegmentedControl