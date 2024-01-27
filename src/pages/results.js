import { useState, useContext, useEffect } from "react"
import { AppContext } from "@/context/context"
import Layout from "@/components/layout"
import Link from "next/link"

export default function Results() {
    console.log("Dashboard component rendered");

    const {departureIata, arrivalIata, airlineIata} = useContext(AppContext)



    return (
        <Layout>
            <div>
                <p>results</p>
            </div>
        </Layout>
    )
}