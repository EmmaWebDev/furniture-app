import {Link} from "react-router-dom";
import K from "../constants";

const Navbar = () => {
  return <div className="flex justify-between px-56 py-10">
    <span>Furnish</span>
    <div className="flex gap-x-10">
    {K.NAVLINKS.map(
        (item,index) => {
          return <Link key={index} to={item.path}>{item.name}</Link>
        }
      )
    }

    </div>
  </div>
}

export default Navbar