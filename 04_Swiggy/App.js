

import React from "react";
import  ReactDOM from "react-dom/client";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

  
  // Header component for header section: Logo, Nav Items
  const Header = () => {
    return (
      <div className="header">
        <div>
            <img className = "logo"src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            
          </ul>
        </div>
      </div>
    );
  };

  

  const RestaurantCard = (props) => {
    const{resName, cuisine, rating, time} = props
    return(
        <div className="res-card">
             <img className="meghna-img"
       alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
       />
       <h3>{resName}</h3>
       <h4>{cuisine}</h4>
       <h4>{rating}</h4>
       <h4>{time}</h4>
      
        </div> 

    );
  };

  const Body = () => {
    return(
           <div className="body">
             <div className="Search"> Search</div>
            <div className="res-container">
                <RestaurantCard 
                resName ="Meghna Foods"
                cuisine ="Birayani, North Indian, Asian"
                rating ="4.5 Starts"
                time ="37 Minutes"
              />
                
                <RestaurantCard  
                resName="KFC"
                cuisine ="Burger, Chiken "
                rating ="4.4 Starts"
                time ="30 Minutes"
                />   
                
            </div>

           </div>


    );
  };



    const AppLayout = () => {
        return (
          <div className="app">
        <Header />
        <Body />
            </div>
        );
      };
      
      const root= ReactDOM.createRoot(document.getElementById("root"));

      root.render(<AppLayout />);
      