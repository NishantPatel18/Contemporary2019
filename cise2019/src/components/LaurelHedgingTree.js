import React, { Component } from 'react';
import './tree.css';
// import LaurelHedgingTreePic from "./images/LaurelHedgingTreePic.jpg";

class LaurelHedgingTree extends Component {
    render() { 
        return (
            <div class = "LaurelHedgingTreePage">

                <h1>Laurel Hedging Tree</h1>

                <br></br>
                
                {/* <img src={LaurelHedgingTreePic} alt="LaurelHedgingTreePic" className="LaurelHedgingTreePic"></img> */}

                <br></br>

                <p>Tree Category: Hedge</p>

                <p>
                Conditions of Place to be Planted:
                <br></br>
                {/* <br></br> */}
                {/* text goes here */}
                <br></br>
                <br></br>
                Soil Drainage (fast/med/slow/anything): 'text goes here'
                <br></br>
                <br></br>
                Sun (sunny/med/shade/anything): 'text goes here'
                </p>

                <p>
                Maintenance Requirements (high/med/low) - (feeding, watering, pruning): 
                <br></br>
                {/* <br></br> */}
                {/* text goes here */}
                <br></br>
                <br></br>
                {/* text goes here */}
                <br></br>
                <br></br>
                {/* text goes here */}
                <br></br>
                {/* <br></br> */}
                </p>

                <p>Maximum Height of Mature Tree (Less than 1m, 1-2m, 2-3m, Greater than 3m):
                <br></br>
                {/* <br></br> */}
                {/* text goes here */}
                </p>

                <p>Growth Rate (fast/med/slow):
                <br></br>
                {/* <br></br> */}
                {/* text goes here */}
                </p>
                
                <p>Price: 'text goes here'</p>

                <p>
                Relevant Facts Flowers:
                <br></br>
                {/* <br></br> */}
                {/* text goes here */}
                </p>

                <p>Relevant Facts Berries:
                <br></br>
                {/* <br></br> */}
                {/* text goes here */}
                </p>

                <br></br>

                {/* Add to cart button goes here */}
                <button class="button">Add to Cart</button>

                <br></br>
                <br></br>
                <br></br>

            </div>
        );
    }
}
 
export default LaurelHedgingTree;