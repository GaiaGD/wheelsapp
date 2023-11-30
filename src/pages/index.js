import Link from "next/link";
import Image from "next/image";

import { Work_Sans } from 'next/font/google'

const roboto = Work_Sans({
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={`grid h-screen ${roboto.className}`}>
      
      <div className={`m-auto self-center justify-self-center ${roboto.className}`}>
        <h1>Test</h1>

        <div>
          {/* <Image src="public/wheels-app-logo.gif" /> */}
        </div>
        <Link href={'/test'}>
            TEST
        </Link>


      </div>

    </main>
  )
}
