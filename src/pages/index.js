import Link from "next/link";
import Layout from "@/components/layout";
import Button from "@/components/button";

export default function Home() {

  return (
    <Layout>
      <div>
        <div className="">
          <img src="/wheels-app-logo.gif" alt="Window" className="max-h-40 mx-auto"/>        
        </div>
        <div className="py-10">
          <img src="/wa-logotype.svg" alt="Logo" className="max-w-[200px] w-full mx-auto" />
        </div>        
        <Link href={"/input"}>
          <Button>
            <p>Let's go!</p>
          </Button>
        </Link>
      </div>
    </Layout>
  )
}
