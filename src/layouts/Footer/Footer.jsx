import './Footer.scss'
import classNames from 'classnames'

const Footer = (props) => {
  const {
    className,
  } = props
  return (
    <footer
      className={classNames(className, 'footer')}
    >
      <h3>Footer</h3>
    </footer>
  )
}

export default Footer