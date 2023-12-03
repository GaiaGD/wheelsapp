export default function BoardingDots(){

    const Dot = () => (
        <div className="relative">
          <div className="absolute left-[-1rem] rounded-full bg-black h-8 w-8"></div>
        </div>
    )      

    return (
        <div className="relative top-[46.5%] flex justify-between">
            <Dot />
            <Dot />
        </div>
    )
}