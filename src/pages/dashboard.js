import Layout from "@/components/layout"

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
                    <div className="absolute inset-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
                </div>
                <div className="w-full h-3/6 h-[50vh] relative" style={backgroundImageBottom}>
                    <div className="absolute inset-0 top-0 bg-gradient-to-t from-transparent to-black opacity-100"></div>
                </div>

                <div className="h-[60vh] top-[20%] left-[10%] right-[10%] absolute bg-off-white rounded-[20px]">
                    <p>d</p>
                </div>

            </div>
        </Layout>
    )
}