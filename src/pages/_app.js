import '@/styles/globals.css'
import { AppContextProvider } from '@/context/context'

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
    )
}
