import burger from "../assets/burger.jpg"
import sandwich from "../assets/sandwich.avif"
import coffee from "../assets/coffe.jpg"
const Cards=()=>{
    return(


        <div className="h-80 bg-slate-300 p-14 flex flex-row space-x-20">

   {/* first card */}
<div className="flex flex-row bg-white rounded-xl w-96 p-5">


    <div className="flex flex-col ">

<div className="flex flex-row ">
<img src={burger} className="w-48"/>
<h1 className="text-center pt-4">
Pesto and Mozzarella Sandwich
</h1>
</div>

<div className="flex flex-row space-x-32">
<h1 className="py-4">₹409.50</h1>
<button className="px-7 bg-green-400 py-3 rounded-full">Add item</button>
</div>

    </div>

 
</div>

{/* second card */}

<div className="flex flex-row bg-white rounded-xl w-96 p-5">


    <div className="flex flex-col ">

<div className="flex flex-row ">
<img src={sandwich} className="w-48 "/>
<h1 className="text-center pt-4">
Pesto and Mozzarella Sandwich
</h1>
</div>

<div className="flex flex-row space-x-32">
<h1 className="py-3">₹109.50</h1>
<button className="px-7 bg-green-400 py-3 rounded-full">Add item</button>
</div>

    </div>

 
</div>

  {/* third one */}

<div className="flex flex-row bg-white rounded-xl w-96 p-5">


    <div className="flex flex-col ">

<div className="flex flex-row ">
<img src={coffee} className="w-48 "/>
<h1 className="text-center pt-4">
Pesto and Mozzarella Sandwich
</h1>
</div>

<div className="flex flex-row space-x-32">
<h1 className="py-3">₹109.50</h1>
<button className="px-7 bg-green-400 py-3 rounded-full">Add item</button>
</div>

    </div>

 
</div>

        </div>
    )
}

export default Cards;