import { useState, useContext } from "react"
import { AppContext } from "@/context/context"
import Layout from "@/components/layout"
import BoardingDots from "@/components/boardingDots"
import { Cloud, Sun, Plane } from "@/components/icons"
import Link from "next/link"

// export async function getServerSideProps(){

    // const resAirports = await fetch('https://raw.githubusercontent.com/konsalex/Airport-Autocomplete-JS/master/src/data/airports.json')
    // const airportData = await resAirports.json()

    // const resAirlines = await fetch('https://raw.githubusercontent.com/npow/airline-codes/master/airlines.json')
    // const airlineData = await resAirlines.json()

    // return {
    //     props: {
    //         airportsProps: airportData,
    //         airlineProps: airlineData
    //     }
    // }
// }

export default function Dashboard() {

    const {departureIata, arrivalIata, airlineIata} = useContext(AppContext)

    const backgroundImageTop = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const backgroundImageBottom = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }



    return (
        <Layout>
            <div className="relative">
                <div className="w-full h-3/6 h-[50vh] relative" style={backgroundImageTop}>
                    <div className="absolute height-[60%] top-[40%] inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
                </div>
                <div className="w-full h-3/6 h-[50vh] relative" style={backgroundImageBottom}>
                    <div className="absolute height-[60%] bottom-[40%] inset-0 bg-gradient-to-t from-transparent to-black opacity-100"></div>
                </div>

                {/* boarding ticket */}
                <div className="md:h-[60vh] md:top-[20%] h-[66vh] top-[17%] left-[5%] right-[5%] shadow-2xl absolute bg-off-white rounded-[20px]">

                    <BoardingDots />
                    <div className="h-full grid content-between">
                        {/* departure */}
                        <div className="px-4 pt-4">

                            <div className="flex justify-between border-dotted border-zinc-400 border-b-[1px] py-2">
                                <div className="w-3/6">
                                    <h1 className="text-outline text-4xl font-semibold text-outline text-off-white">FCO</h1>
                                    <p className="text-sm">Rome, Italy</p>
                                </div>
                                <div className="w-3/6">
                                    <h1 className="text-4xl font-regular">10:40</h1>
                                    <p className="text-sm">Delay: 20min</p>
                                </div>
                            </div>

                            <div className="flex justify-between py-2">
                                <div className="w-3/6">
                                <p className="text-sm">Sunny</p>
                                    <div className="flex">
                                        <p className="text-sm">25</p>
                                        <Sun />
                                    </div>
                                </div>
                                <div className="w-3/6">
                                    <p className="text-sm">Terminal: 20</p>
                                    <p className="text-sm">Gate: 34</p>
                                </div>
                            </div>

                        </div>

                        {/* moving plane */}
                        <div className="px-4 text-center">
                            {/* <div className="relative border-b-dashed top-[50%] border-[1px] bg-brown-burnt mx-8"></div> */}
                            <p className="text-sm">FLIGHT</p>
                            <h1 className="text-3xl font-medium">DL 6589</h1>
                            <p className="text-sm">Delta Airlines</p>

                            <div className="relative w-full h-8">
                                <div className="top-[50%] absolute w-full border-dotted border-zinc-400 border-b-[1px]"></div>
                                <div className="absolute">
                                    <Plane />
                                </div>
                            </div>

                        </div>

                        {/* arrival */}
                        <div className="px-4 p-4">

                            <div className="flex justify-between border-dotted border-zinc-400 border-b-[1px] py-2">
                                <div className="w-3/6">
                                    <h1 className="text-4xl font-regular">14:50</h1>
                                    <p className="text-sm">Delay: 20min</p>
                                </div>
                                <div className="w-3/6">
                                    <h1 className="text-outline text-4xl font-semibold text-outline text-off-white">JFK</h1>
                                    <p className="text-sm">New York, USA</p>
                                </div>
                            </div>

                            <div className="flex justify-between py-2">
                                <div className="w-3/6">
                                    <p className="text-sm">Terminal: 20</p>
                                    <p className="text-sm">Gate: 34</p>
                                </div>
                                <div className="w-3/6">
                                    <p className="text-sm">Cloudy</p>
                                    <div className="flex">
                                        <p className="text-sm">25</p>
                                        <Cloud />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* go back */}
                <Link href={"/input"}>
                    <div className="h-[9vh] w-[9vh] bottom-[2%] left-[5%] shadow-2xl absolute bg-off-white rounded-full grid place-content-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                </Link>
            </div>
        </Layout>
    )
}