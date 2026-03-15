import './Header.scss'
import classNames from 'classnames'

const Header = (props) => {
  const {
    className,
  } = props
  return (
    <header
      className={classNames(className, 'header')}
    >
      <h2>Header</h2>
    </header>
  )
}

export default Header