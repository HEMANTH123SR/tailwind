import logo from "../assets/logo.png"
import insta from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import android from "../assets/appstoreAndroid.png"
import ios from"../assets/appstoreiOS.png"
const Fotter=()=>{
    return(
        <div className="w-full 
        h-96
        mt-16
        bg-green-900
        flex flex-col 
        p-20
        px-44
        text-white
        ">
<div className="space-x-14 flex flex-row">
    
    <div>
        {/* star bucks logo */}
        <img src={logo} className="w-20"/>
    </div>
    <div className="space-y-4">
        {/* about us */}
        <h1 className="text-2xl">About Us</h1>
        <p>Our Heritage</p>
        <p>Our Company</p>
        <p>Coffeehouse</p>

    </div>
    <div className="space-y-4">
        {/* Responsiblity */}
        <h1 className="text-2xl">Responsiblity</h1>
        <p>Community</p>
        <p>Ethical Sourcing</p>
        <p>Environment
        </p>
        <p>Diversity</p>
    </div>
    <div className="space-y-4">
        {/* Quick Links */}
   <h1 className="text-2xl">Quick Links</h1>
   <p>Delivery</p>
   <p>Season's Gifting</p>
   <p>Careers</p>
   <p>Customer Service</p>
   <p>FAQs</p>
    </div>
    <div className="">
        {/* Social Media */}
        <h1 className="text-2xl space-y-4">SOCIAL MEDIA</h1>
        <div className="flex flex-row space-x-6">
        <img src={insta} className="w-8"/>
        <img src={facebook} className="w-8"/>
        <img src={twitter} className="w-8"/>
        </div>
       
    </div>
    <div className="space-y-4">
        {/* app and play store */}
        <img src={android}/>
        <img src={ios}/>
    </div>
</div>
        </div>
    )
}

export default Fotter;