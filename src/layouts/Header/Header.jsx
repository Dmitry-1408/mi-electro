import './Header.scss'
import classNames from 'classnames'

const Header = (props) => {
  const {
    className,
  } = props
  return (
    <div
      className={classNames(className, 'header')}
    >
      Header
    </div>
  )
}

export default Header