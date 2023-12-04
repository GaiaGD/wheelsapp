import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { AppContextProvider } from '@/context/context'

export default function App({ Component, pageProps }) {
  return (
      <AppContextProvider>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </AppContextProvider>
    )
}
