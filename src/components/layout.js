import { Work_Sans } from 'next/font/google'

const work = Work_Sans({
    subsets: ['latin'],
    styles: {
      fontWeight: 100, // Specify the desired font weight here
    },
  })

export default function Layout({ children }) {

    return (
        <main className={`grid h-screen ${work.className}`}>
            <div className={`w-[600px] m-auto self-center justify-self-center`}>  
                {children}
            </div>
        </main>
    )

}