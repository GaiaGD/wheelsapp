import Link from "next/link";
import Layout from "@/components/layout";
import Button from "@/components/button";

export default function Home() {

  return (
    <Layout>
      <div className="m-auto p-6">
        <Link href={"/"} className="w-full">
          <img src="/wheels-app-logo.gif" alt="Window" className="max-h-40 mx-auto"/>        
        </Link>
        <div className="py-10 w-full">
          <img src="/wa-logotype.svg" alt="Logo" className="max-w-[200px] w-full mx-auto" />
        </div>        
        <Link href={"/input"}>
          <Button>
            <p>Let&rsquo;s go!</p>
          </Button>
        </Link>
      </div>
    </Layout>
  )
}
