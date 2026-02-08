import '@/styles'
import {Head} from "minista"
import Header from "@/layouts/Header";
import Content from "@/layouts/Content";
import Footer from "@/layouts/Footer";

export default function (props) {
  const {
    children,
    title,
    url,
    isHeaderFixed,
  } = props

  return (
    <>
      <Head htmlAttributes={{Lang: 'ro'}} >
        <title>electric scooter | {title}</title>
      </Head>
      <Header/>
      <Content></Content>
      <Footer/>
    </>
  )

}