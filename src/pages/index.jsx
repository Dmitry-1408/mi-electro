import Test from "@/components/Test";
import Button from "@/components/Button";

export const metadata = {
  title: 'Dark',
  isHeaderFixed: true,
}

export default function () {
  return (
    <>
      <Test title='Button'>
        <Button
          href='/'
          label='Купить'
          mode='color-vibrant-orange'
        />
      </Test>

      <Test title='Test2'>
        <Button
          href='/'
          label='Задать вопрос'
          mode='color-light-gray'
        />
      </Test>

      <Test title='Test3' />
      <Test title='Test4' />
      <Test title='Test5' />
    </>
  )
}
