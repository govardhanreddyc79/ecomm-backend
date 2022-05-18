import { Navbar, CategoryCard, NewDealsCard, Footer } from "components";
import axios from "axios";
import { ecombanner } from "assets/images";
import { useState, useEffect } from "react";
import { newDeals } from "staticData";
import "./home.css";



export const Home = () => {

    const [ categories, setCategories] = useState([]);

    useEffect(() => {
        (async function () {
            try{
                let category = await axios.get("/api/categories");
                setCategories(category.data.categories)
            }catch (err) {}
        })();
    },[])

    
    return (
      <div className="homepage-bg">

        <Navbar />
        

        <main className="flex-column">
          <div className="category-cards">
            
            { categories.map((item) => {
                return(
                    <CategoryCard key = {item._id} categoryItem={item} />
                )
            })} 
          </div>
  
          <div className="category-cards">
          { newDeals.map((deal) => {
                return(
                    <NewDealsCard key = {deal._id} dealItem={deal} />
                )
            })}
              </div>
        <div className="flex-row">
            <div className="ecom-banner">
                <img className="homepage-image" src={ecombanner} alt="Sports Adda Logo"/>
            </div>
          </div>
  
            
          <Footer />
          </main>
      

      </div>
    );
  }
  
  export default Home;
  