import { Work_Sans } from 'next/font/google'
import { Inter } from 'next/font/google'
import { motion } from "framer-motion";

const work = Work_Sans({
    subsets: ['latin'],
    styles: {
      fontWeight: 100, // Specify the desired font weight here
    },
  })

const inter = Inter({
    subsets: ['latin'],
    styles: {
      fontWeight: 100, // Specify the desired font weight here
    },
  })

export default function Layout({ children }) {

    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
          <main className={`h-screen ${inter.className} flex justify-center items-center`}>
              <div className={`md:w-[600px] w-full`}>
                  <div>
                      {children}
                  </div>
              </div>
          </main>

      </motion.div>
    )

}