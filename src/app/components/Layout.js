import Footer from './footer'
import Header from './header'
import Navbar from './navbar'
import WhatsappIcon from './whatsapp-icon'

const Layout = ({children}) => {
  return (
    <main className="flex  flex-col items-center justify-between p-8  md:p-20 w-auto  space-y-4 ">     
        <Header/>
        <Navbar/>
        {children}
        <WhatsappIcon/>
        <Footer/>
    </main>
  )
}

export default Layout