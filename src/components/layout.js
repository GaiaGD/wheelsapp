import { Work_Sans } from 'next/font/google'
import { Inter } from 'next/font/google'

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
        <main className={`h-screen ${inter.className} flex justify-center items-center`}>
            <div className={`md:w-[600px] w-full`}>
                <div>
                    {children}
                </div>
            </div>
        </main>
    )

}