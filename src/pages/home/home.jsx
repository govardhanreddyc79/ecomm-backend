// import { Navbar } from "/components/navbar";
import { Navbar, CategoryCard, NewDealsCard,  } from "components";
import axios from "axios";
import { sportsadda } from "assets/images";
import { useState, useEffect } from "react";
import { newDeals } from "staticData";
// import { NewDealsCard } from "/components/newDealsCard";



const Home = () => {

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
      <div>

        <Navbar />
  
        <main className="flex-column">
          <div className="category-cards">
            
            { categories.map((item) => {
                return(
                    <CategoryCard key = {item._id} categoryItem={item} />
                )
            })} 
          </div>
          
          <div className="flex-column flex-center margin-top">
              <h1 className="flex-center margin-top">Welcome to the Sports Adda</h1>
              <img className="home-logo flex-center" src={sportsadda} alt="Sports Adda Logo"/>
  
              <h2>Deals of the Day</h2>
          </div>
  
          
          <div className="category-cards margin">
          { newDeals.map((deal) => {
                return(
                    <NewDealsCard key = {deal._id} dealItem={deal} />
                )
            })}
              </div>
        
  
          </main>
      
      </div>
    );
  }
  
  export default Home;
  