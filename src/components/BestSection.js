import Coffee from "../assets/Bestseller.jpg"
import CoffeeAtHome from "../assets/CoffeeAtHome.jpg"
import Drinks from "../assets/Drinks.jpg"
import Food from "../assets/Food.jpg"
import Merch from "../assets/Merchandise.jpg"
import choclate from "../assets/ReadyToEat.jpg"
const BestSection=()=>{
    return(
        <div className="h-44 

        mx-28
        ">
    <h1 className="
    py-8
    font-bold
    text-slate-900

    
    text-2xl
    "
    >Handcrafted Curations</h1>
    <div className="flex flex-row space-x-24">
        <div>
        <img src={Coffee}  className="w-28 h-28 rounded-full" />
        <h1 className="text-center">Bestseller</h1>
        </div>

        <div>
        <img src={Drinks} className="w-28 h-28 rounded-full" />
        <h1 className="text-center">Drinks</h1>
        </div>

        <div>
        <img src={Food}  className="w-28 h-28 rounded-full" />
        <h1 className="text-center">Food</h1>
        </div>

        <div>
        <img src={Merch}  className="w-28 h-28 rounded-full" />
        <h1 className="text-center">Merchandise</h1>
        </div>

        <div>
        <img src={choclate} className="w-28 h-28 rounded-full" />
        <h1 className="text-center">Ready to Eat</h1>
        </div>
       
        <div>
        <img src={CoffeeAtHome} className="w-28 h-28 rounded-full"  />
     
        <h1 className="text-center"> Home</h1>
        
       
        </div>
    </div>
        </div>
    )
}

export default BestSection;