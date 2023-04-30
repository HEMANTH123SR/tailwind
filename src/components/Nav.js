import logo from "../assets/logo.png"


const Nav=()=>{
    return(
      <nav className="flex flex-row mx-32 my-6">
        <div className="flex-auto">
          <img src={logo} 
          className="w-10"
          
          />          
        </div>

      
        <div className="flex-auto">
          <ul className="flex flex-row space-x-14 p-2">
            <li>Home</li>
            <li>Gift</li>
            <li>Order</li>
            <li>Pay</li>
            <li>Store</li>            
          </ul>
        </div>

        <div className="flex-auto ">
<form>
  <input
  className="w-72
p-2
px-6
border-blue-950
border-2
rounded-full

  "
  
  type="text" placeholder="Looking for something specific "/>
</form>

        </div>
      </nav>
    )
}


export default Nav;