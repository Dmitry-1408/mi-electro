import './Content.scss'
import classNames from 'classnames'

const Content = (props) => {
  const {
    className,
  } = props
  return (
    <div
      className={classNames(className, 'content')}
    >
      <h1>Content</h1>
    </div>
  )
}

export default Content