import './SegmentedControlItem.scss'
import classNames from 'classnames'

const SegmentedControlItem = (props) => {
  const {
    type = 'button',
    mode = ' ',
    label,
  } = props
  return (
    <button
      className={`segmented-control-item segmented-control-item--${mode}`}
    >
      {label}
    </button>
  )
}

export default SegmentedControlItem