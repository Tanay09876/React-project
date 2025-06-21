import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-xl">

        <div className="bg-blue-500 text-white rounded-lg px-6 py-3 shadow-lg flex justify-between items-center">
          <Link to = "/">
              <div className="text-2xl font-bold tracking-wide">🛍️Zomato Mall</div>
          </Link>
      
          <div className="space-x-6 text-lg font-medium">
      
            <Link to="/product" className="hover:text-yellow-300 transition-colors">Products</Link>
           
            <Link to="/seller" className="hover:text-yellow-300 transition-colors">Add Seller</Link>
            <Link to="/login" className="hover:text-yellow-300 transition-colors">  Login / Signup</Link>
            <Link to="/features" className="hover:text-yellow-300 transition-colors">Features</Link>
          
          </div>
        </div>
   
    </nav>
  );
}

export default Navbar;




// import { Link } from 'react-router-dom';


// function Navbar() {
//   return (
//     <nav className="bg-blue-600 shadow-xl">

//       <div className="bg-blue-500 text-white rounded-lg px-6 py-3 shadow-lg flex justify-between items-center">
//         <Link to="/">
//           <div className="text-2xl font-bold tracking-wide">Project</div>
//         </Link>

//         <div className="space-x-6 text-lg font-medium">

//           <Link to="/counter" className="hover:text-yellow-300 transition-colors">Counter</Link>
//           <Link to="/twitterr" className="hover:text-yellow-300 transition-colors">Twitter</Link>
//           <Link to="/input" className="hover:text-yellow-300 transition-colors"> Input </Link>
//           <Link to="/data" className="hover:text-yellow-300 transition-colors"> Data </Link>
//           <Link to="/store" className="hover:text-yellow-300 transition-colors"> Store </Link>
//           <Link to="/api" className="hover:text-yellow-300 transition-colors"> Fetch </Link>
//           <Link to="/apidata" className="hover:text-yellow-300 transition-colors"> Get </Link>
//           <Link to="/emoji" className="hover:text-yellow-300 transition-colors"> Emoji </Link>
//           <Link to="/form" className="hover:text-yellow-300 transition-colors"> Form</Link>
//           <Link to="/autorefershclock" className="hover:text-yellow-300 transition-colors"> Clock </Link>
//           <Link to="/onlinecheckerstatus" className="hover:text-yellow-300 transition-colors"> Online Checker </Link>
//           <Link to="/localform" className="hover:text-yellow-300 transition-colors"> Local Form </Link>
    

//         </div>
//       </div>

//     </nav>
//   );
// }

// export default Navbar;
