import React from 'react';

import Card from '../components/Card';

import TradesHome from '../Images/TradesHome.png';
import TradesPitt from '../Images/TradesPitt.png';
import TradesTbl from '../Images/TradesTbl.png';
import RsHome from '../Images/RsHome.png';
import RsSignUp from '../Images/RsSignUp.png';
import RsAdd from '../Images/RsAdd.png';
import RFShome from '../Images/RFShome.png';
import RfsShow from '../Images/RfsShow.png';
import Yes from '../Images/yes_rest.png';
import YesHome from '../Images/yesLanding.png';
import Signup from '../Images/Yes_signup.png';

import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Red Squirrel',
                    subTitle: 'Personal Inventory Tracker',
                    desc: 'Full Stack application that allows users to sign up and items',
                    imgSrc1: RsHome,
                    imgSrc2: RsSignUp,
                    imgSrc3: RsAdd,
                    link: 'https://github.com/mreidy88/red-squirrel',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Reach For The Stars',
                    subTitle: 'NASA Astronomy Picture of the Day',
                    desc: 'Using API calls to the NASA photography API, Reach For The Stars displays a new picture everyday to show the extraordinary beauty of the universe',
                    imgSrc: RfsShow,
                    imgSrc2: RFShome,
                    link: 'https://github.com/mreidy88/Nasa-APOD-project',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Trades For The Cup',
                    subTitle: 'NHL Trade Deadline Performance Tracker',
                    desc: 'Tracking Team and Player performance from before and after key trades were made. (Script for API calls has been removed due to use of a paid API)' ,
                    imgSrc: TradesHome,
                    imgSrc2: TradesPitt,
                    imgSrc3: TradesTbl,
                    link: 'https://github.com/mreidy88/P1-Trade-Tracker',
                    selected: false
                },
                {
                  id: 2,
                  title: `'Yes, We're Open'`,
                  subTitle: 'Restaurant App',
                  desc: `Yes, we're open is a Full Stack web app that will allow small restaurants and business owners advertise to the public that they are open for business during this trying time.` ,
                  imgSrc: Yes,
                  imgSrc2: YesHome,
                  imgSrc3: Signup,
                  link: 'https://github.com/mreidy88/yes-were-open',
                  selected: false

                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;