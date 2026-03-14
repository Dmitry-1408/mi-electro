import './SegmentedControl.scss'
import classNames from 'classnames'
import SegmentedControlItem from "@/components/SegmentedControlItem";

const SegmentedControl = (props) => {
  const {
    type = 'button',
  } = props
  return (
    <div
      className='segmented-control'
    >
      <SegmentedControlItem
        type
        mode='white'
        label='Белый'
      />

      <SegmentedControlItem
        type
        mode='black'
        label='Черный'
      />

    </div>
  )
}

export default SegmentedControl