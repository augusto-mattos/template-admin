import { AppProvider } from '../data/context/AppContext'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>  
      <Component {...pageProps} />
    </AppProvider>
    ) 
}
