import './Test.scss'
import classNames from 'classnames'

const Test = (props) => {
  const {
    className,
    title,
    children,
  } = props
  return (
    <section
      className={classNames(className, 'test')}
    >
      <h1 className='test__title'>{title}</h1>
      {children}
    </section>
  )
}

export default Test