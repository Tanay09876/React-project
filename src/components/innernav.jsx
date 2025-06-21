import { Link } from 'react-router-dom';
   


function Inner() {
  return (
    <nav className="bg-blue-600 shadow-xl">
      <div className="bg-blue-500 text-white rounded-lg px-6 py-3 shadow-lg flex flex-wrap justify-between items-center gap-4">

        <ul className="flex flex-wrap gap-3 text-sm font-medium">
          <li>
            <Link to="/counter">
              <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-300 transition">Counter</button>
            </Link>
          </li>
          <li>
            <Link to="/twitterr">
              <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-300 transition">Twitter</button>
            </Link>
          </li>
          <li>
            <Link to="/input">
              <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-300 transition">Input</button>
            </Link>
          </li>
          <li>
            <Link to="/data">
              <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-300 transition">Data</button>
            </Link>
          </li>
          <li>
            <Link to="/store">
              <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-300 transition">Store</button>
            </Link>
          </li>
          <li>
            <Link to="/api">
              <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-300 transition">Fetch</button>
            </Link>
          </li>
          <li>
            <Link to="/apidata">
              <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-300 transition">Get</button>
            </Link>
          </li>
          <li>
            <Link to="/emoji">
              <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-300 transition">Emoji</button>
            </Link>
          </li>
          <li>
            <Link to="/form">
              <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-300 transition">Form</button>
            </Link>
          </li>
          <li>
            <Link to="/autorefershclock">
              <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-300 transition">Clock</button>
            </Link>
          </li>
          <li>
            <Link to="/onlinecheckerstatus">
              <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-300 transition">OnlineStaus  Checker</button>
            </Link>
          </li>
          <li>
            <Link to="/localform">
              <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-yellow-300 transition">Local Form</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Inner
