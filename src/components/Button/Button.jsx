import './Button.scss'
import classNames from 'classnames'

const Button = (props) => {
  const {
    className,
    type = 'button',
    href,
    mode = ' ',
    label,
  } = props

  return (
    <a
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode,
      })}
    >
      <span className='button__label'>{label}</span>
    </a>
  )
}

export default Button