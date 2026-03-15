import './SegmentedControlItem.scss'
import classNames from "classnames";

const SegmentedControlItem = ({
  mode,
  label,
  isActive,
  onClick
}) => {

  return(
    <button
      className={classNames(
        'segmented-control-item',
        {
          'segmented-control-item--white': mode === 'white' && isActive,
          'segmented-control-item--black': mode === 'black' && isActive
        }
      )}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default SegmentedControlItem