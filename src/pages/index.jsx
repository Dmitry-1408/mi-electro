import Test from "@/components/Test";
import Button from "@/components/Button";
import SegmentedControl from "@/components/SegmentedControl";

export const metadata = {
  title: 'Dark',
  isHeaderFixed: true,
}

export default function () {
  return (
    <>
      <Test title='Button'>
        <SegmentedControl />
      </Test>

      <Test title='Test2'>


      </Test>

      <Test title='Test3' />
      <Test title='Test4' />
      <Test title='Test5' />
    </>
  )
}
