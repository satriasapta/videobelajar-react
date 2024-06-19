import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'

import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import './index.css'

function App() {

  return (
    <>
      <div className="bg-background">

        <Navbar />
        {/* <div className='px-5 py-7 flex-col justify-start items-center gap-6 inline-flex'> */}
        <Header />
        <Content />
        <Footer />
      </div>
      {/* </div>s */}
    </>
  )
}

export default App
