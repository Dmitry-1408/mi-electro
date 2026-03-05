import './Content.scss'
import classNames from 'classnames'
import Test from "@/components/Test";

const Content = (props) => {
  const {
    className,
  } = props
  return (
    <main
      className={classNames(className, 'content')}
    >
      <Test title='Test1' />
      <Test title='Test2' />
      <Test title='Test3' />
      <Test title='Test4' />
      <Test title='Test5' />
    </main>
  )
}

export default Content