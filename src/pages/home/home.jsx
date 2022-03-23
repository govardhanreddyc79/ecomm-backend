import { Navbar } from "../../components/navbar";
import { CategoryCard } from "../../components/categoryCard";
import axios from "axios";
import { useState, useEffect } from "react";


const Home = () => {

    const [ categories, setCategories] = useState([]);

    useEffect(() => {
        (async function () {
            try{
                let category = await axios.get("/api/categories");
                console.log(category)
                setCategories(category.data.categories)
            }catch (err) {
                console.log(err)
            }
        })();
    },[])

    
    return (
      <div>
        <Navbar />
  
        <main className="flex-column">
          <div className="category-cards">
            
            { categories.map((category) => {
                return(
                    <CategoryCard category={category} />
                )
            })}


              {/* <div className="category">
                  <img className ="cat-image" src="./assets/images/bats.jpg" alt="Bats" />
                  <a className = "cat-item" href="./ProductListing/productListing.html" target="_blank">Bats</a>
      
              </div>
              <div className="category">
                  <img className ="cat-image" src="./assets/images/balls.jpg" alt="Bats" />
                  <a className = "cat-item" href="./ProductListing/productListing.html" target="_blank">Balls</a>
      
              </div>
              <div className="category">
                  <img className ="cat-image" src="./assets/images/stumps.jpg" alt="Bats" />
                  <a className = "cat-item" href="./ProductListing/productListing.html" target="_blank">Stumps</a>
  
                  
      
              </div>
              <div className="category">
                  <img className ="cat-image" src="./assets/images/gloves.jpeg" alt="Bats" />
                  <a className = "cat-item" href="./ProductListing/productListing.html" target="_blank">Gloves</a>
      
              </div> */}
  
          </div>
          
          <div className="flex-column flex-center margin-top">
              <h1 className="flex-center margin-top">Welcome to the Sports Adda</h1>
              <img className="home-logo flex-center" src="./assets/images/sportsadda.jpg" alt=""/>
  
              <h2>Deals of the Day</h2>
          </div>
  
          
          <div className="category-cards margin">
              <div className="new-arrivals">
                  <img className ="deal-image" src="./assets/images/pads.jpg" alt="Bats"/>
                  <div>
                      <h3>Available at 70% OFF</h3>
                      <a className = "cat-item margin-top" href="./ProductListing/productListing.html" target="_blank"><i className="fa-solid fa-share"></i> Pads</a>
                  </div>    
  
              </div>
  
              <div className="new-arrivals">
                  <img className ="deal-image" src="./assets/images/helmet.jpg" alt="Bats"/>
                  <div>
                      <h3>Available at 50% OFF</h3>
                      <a className = "cat-item margin-top" href="./ProductListing/productListing.html" target="_blank"><i className="fa-solid fa-share"></i> Helmets</a>
                  </div>
                  
              </div>
              <div>
  
              </div>
  
          </div>
  
          </main>
      
      </div>
    );
  }
  
  export default Home;
  