import Card from "./Card";
import wedding from "../assets/images/wedding.jpg";
import mountain from "../assets/images/mountain.jpg";
import sport from "../assets/images/sport.jpg";

export default function Activities() {
    let allActivities = [
        {
            title: 'Life lessons with Katie Zaferes            ',
            image: sport,
            price: 136,
            rating: '5.0',
            rank: 6,
            location: "Offline",
            openSpots: 0
        },
        {
            title: 'Learn wedding photography     ',
            image: wedding,
            price: 125,
            rating: '5.0',
            rank: 30,
            location: "Online",
            openSpots: 5
        },
        {
            title: 'Group Mountain Biking',
            image: mountain,
            price: 50,
            rating: '4.8',
            rank: 2,
            location: "Offline",
            openSpots: 5
        }
    ]
    return (
        <section className="section">
            <div className="container">
                <div className="card-container">
                    {allActivities.map((activity, i) => {
                        return (<Card key={activity.title} activity={activity} />)
                    })}
                </div>
            </div>
        </section>
    )
}