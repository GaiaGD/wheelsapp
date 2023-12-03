import Link from "next/link";
import Layout from "@/components/layout"
import Button from "@/components/button"
import FormInput from "@/components/formInput";

export default function Input() {
    return (
        <Layout>
            <div className="p-8">

                <div className="">
                    <Link href={"/"}>
                        <img src="/wheels-app-logo.gif" alt="Window" className="max-h-20 mx-auto"/>        
                    </Link>
                </div>
                <div className="md:mx-20 md:mb-20 mb-12">
                    <FormInput>
                        <input className="bg-off-white w-full focus:outline-none text-center" type="text" placeholder="departure airport" />
                    </FormInput>
                    <FormInput>
                        <input className="bg-off-white w-full focus:outline-none text-center" type="text" placeholder="arrival airport" />
                    </FormInput>
                    <FormInput>
                        <input className="bg-off-white w-full focus:outline-none text-center" type="text" placeholder="airline" />
                    </FormInput>
                </div>
                <Link href={"/dashboard"}>
                    <Button>
                        <p>Let's go!</p>
                    </Button>
                </Link>

                <div className="py-8 text-center">
                    <p>Need some inspiration?</p>
                    <p>See all the flights in the air right now on 
                        <a className="pl-2 font-semibold" target="_blank" href="https://www.google.com/search?q=flightradar">flightradar24.</a>
                    </p>
                </div>
            
            </div>

        </Layout>    
    )
}