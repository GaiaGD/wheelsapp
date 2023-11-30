// import { Inter } from 'next/font/google'
import { Work_Sans } from 'next/font/google'

const roboto = Work_Sans({
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={`grid h-screen ${roboto.className}`}>
      
      <div className={`m-auto self-center justify-self-center ${roboto.className}`}>
        <h1>Test</h1>

        

      </div>

    </main>
  )
}
