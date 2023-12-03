import Layout from "@/components/layout"
import BoardingDots from "@/components/boardingDots"

export default function Dashboard() {

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
                <div className="h-[60vh] top-[20%] left-[5%] right-[5%] shadow-2xl absolute bg-off-white rounded-[20px]">

                    <BoardingDots />
                    <div className="h-full">
                        {/* departure */}
                        <div className="h-[35%] p-2">
                            <div className="flex justify-between border-dotted border-brown-burnt border-b-[1px]">
                                <div>
                                    <h1>JFK</h1>
                                    <p>New York, USA</p>
                                </div>
                                <div>
                                    <h1>16:15</h1>
                                    <p>Delay: 20min</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p>Cloudy</p>
                                    <p>25</p>
                                </div>
                                <div>
                                    <p>Terminal: 20</p>
                                    <p>Gate: 34</p>
                                </div>
                            </div>
                        </div>

                        {/* moving plane */}
                        <div className="h-[30%] px-2 text-center">
                            {/* <div className="relative border-b-dashed top-[50%] border-[1px] bg-brown-burnt mx-8"></div> */}
                            <p>FLIGHT</p>
                            <h1>DL 6589</h1>

                            <div className="relative w-full">
                                <div className="absolute w-full border-b-dashed border-[1px] border-brown-burnt">

                                </div>
                            </div>

                        </div>

                        {/* arrival */}
                        <div className="h-[35%] p-2">
                            <div className="flex justify-between border-dotted border-brown-burnt border-b-[1px]">
                                <div>
                                    <h1>JFK</h1>
                                    <p>New York, USA</p>
                                </div>
                                <div>
                                    <h1>16:15</h1>
                                    <p>Delay: 20min</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p>Cloudy</p>
                                    <p>25</p>
                                </div>
                                <div>
                                    <p>Terminal: 20</p>
                                    <p>Gate: 34</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </Layout>
    )
}