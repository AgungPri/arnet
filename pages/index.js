import Head from 'next/head'
import Image from 'next/image'
import MainPages from '../Components/MainPages'
import Footer from '../Components/Footer'
export default function MainPagesIndex() {
  return (
    <>
      <div>
        <MainPages />
        <Footer />
      </div>
    </>
  )
}
