import './Footer.scss'
import classNames from 'classnames'

const Footer = (props) => {
  const {
    className,
  } = props
  return (
    <div
      className={classNames(className, 'footer')}
    >
      <h3>Footer</h3>
    </div>
  )
}

export default Footer