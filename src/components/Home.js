import React from 'react';
function Home(){
    return(
        <div>
          <div className="add-to-cart">
           <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png"/>
          </div>
          <h1>Home Component</h1>
          <div className="cart-wrapper">
             <div className="img-wrapper item">
                <img src="http://localhost/wordpress_customise/wp-content/themes/custom-theme/assets/img/portfolio/portfolio-1.jpg"/> 
             </div>
             <div className="text-wrapper item">
                <span>Creme</span>
                <span>Price:$100.00</span>
             </div>
             <div className="btn-wrapper item">
                 <button>Add to Cart</button>
             </div>
          
          </div>
        </div>
    )
}
export default Home;