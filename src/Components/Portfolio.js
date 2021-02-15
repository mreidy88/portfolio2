import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import TradesHome from '../Images/TradesHome.png';
import TradesPitt from '../Images/TradesPitt.png';
import TradesTbl from '../Images/TradesTbl.png';
import RsHome from '../Images/RsHome.png';
import RsSignUp from '../Images/RsSignUp.png';
import RsAdd from '../Images/RsAdd.png';
import RFShome from '../Images/RFShome.png';
import RfsShow from '../Images/RfsShow.png';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 }
  ];

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Carousel breakPoints={breakPoints}>
            <h3>Trades For The Cup</h3>
            <p>NHL Trade Tracker</p>
            <div id="portfolioImg">
                <Item>
                <img src={TradesHome} alt="Trades For The Cup Homepage" className='TradesImgs'/>              
                <img src={TradesPitt} alt="Trades For The Cup Pittsburgh" className='TradesImgs'/>
                <img src={TradesTbl} alt="Trades For The Cup Tampa Bay" className='TradesImgs'/>
                </Item>
            </div>         
            <h3>Red Squirrel</h3>
            <p>Personal Inventory Tracker</p>      
            <div id="portfolioImg">
                <Item>
                <img src={RsHome} alt="Red Squirrel Homepage" className='redSqImgs'/>
                <img src={RsSignUp} alt="Red Squirrel Sign Up" className='redSqImgs'/>
                <img src={RsAdd} alt="Red Squirrel Add Inventory" className='redSqImgs'/>
                </Item>
            </div>     
            <h3>Reach For The Stars</h3>
            <p>NASA Astronomy Picture of the Day</p>
            <div id="portfolioImg">
                <Item>
                <img src={RFShome} alt="Reach For The Stars Homepage" className='RFSimgs'/>
                <img src={RfsShow} alt="Reach For The Stars Show Page" className='RFSimgs'/>
                </Item>
            </div>
            </Carousel>  
        </div>

    )
}

export default Portfolio
