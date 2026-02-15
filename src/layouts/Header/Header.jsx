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
      <h2>Header</h2>
    </div>
  )
}

export default Header