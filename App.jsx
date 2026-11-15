import Header from './components/Header'
import Banner from './components/Banner'
import Intro from './components/Intro'
import Services from './components/Services'
import About from './components/About'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Intro />
        <Services />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
