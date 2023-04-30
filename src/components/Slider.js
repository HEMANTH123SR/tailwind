import summerBeverage from "../assets/Group_1701_d6192f3622.png"

const Slider=()=>{
  
    return(
        <div className="m-32 bg-pink-300 h-56
        rounded-lg
        flex flex-row
        space-x-32
        ">
   <img src={summerBeverage} />
   <div className="space-y-10">

    <div className="space-y-1 ">
        <h1 className="pt-4"></h1>
        <h1></h1>
    <h1>Refresh & Rejuvenate With</h1>
    <h1 className="text-2xl">Summer Beverage</h1>
    <h1>indulge in the exquisite range of Summer Beverages to beat the heat.</h1>
    </div>
   
   <div>
    <h1>Starting from </h1>
    <h1>₹499</h1>
   </div>
   </div>

   <div >
    <button
    className="mt-40 
    bg-green-600
    px-14
    py-3
    rounded-full
    text-slate-50

    "
    >Order Now</button>
   </div>
        </div>
    )
}

export default Slider;