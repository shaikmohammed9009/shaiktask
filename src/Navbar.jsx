import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  
  return (
    <>
      <div className=" container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light  p-2">
              <NavLink className="navbar-brand text-white pl-5" exact to="/">
              BizMobia
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
               <MenuIcon className="Menu"/>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link text-white" to="/">
                      For Shopping
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/ForLoan">
                     For Personal Loan
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/Offer">
                      Offers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-white " to="/Offer">
                      Blog
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link text-white " to="/Offer">
                      Need Help?
                    </NavLink>
                    </li>
                    <li className="mt-2">
                        <button className="btn md-btn mr-2">Login</button>
                    </li>
                    <li className=" ">
                        <button className="btn md-btn2 mr-2">Register</button>
                    </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
