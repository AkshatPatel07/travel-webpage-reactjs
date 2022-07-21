import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>Check out this EPIC Destinations</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                            src="images/img-9.jpg" text="Explore the hidden waterfall deep inside the jungle" label="Adventure" path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg" text="Travel through the Islands of Bali" label="Adventure" path="/services"
                        />
                    </ul>
                    <ul className="cards_items">
                        <CardItem
                            src="images/img-8.jpg" text="Ride through the Sahara Dessert on a camel" label="Adrenaline" path="/services"
                        />
                        <CardItem
                            src="images/img-1.jpg" text="Go Trekking on top of the Himalayas" label="Adventure" path="/services"
                        />
                        <CardItem
                            src="images/img-3.jpg" text="Set sail in Atlantic Ocean visiting uncharted waters" label="Mystery" path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;