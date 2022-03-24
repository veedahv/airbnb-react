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
            rank: 6
        },
        {
            title: 'Learn wedding photography     ',
            image: wedding,
            price: 125,
            rating: '5.0',
            rank: 30
        },
        {
            title: 'Group Mountain Biking',
            image: mountain,
            price: 50,
            rating: '4.8',
            rank: 2
        }
    ]
    return (
        <section className="section">
            <div className="container">
                <div className="card-container">
                {/* {this.props.question.answers.map((answer, i) => {     
           console.log("Entered");                 
           // Return the element. Also pass key     
           return (<Answer key={answer} answer={answer} />) 
        })} */}
                    {/* array.forEach(element => {
                        
                    }); */}

                    {allActivities.map((activity, i) => {

                        // console.log(activity)
                        // }
                        // function(activity) {
                        return (<Card key={activity.title} activity={activity} />)
                    })}
                    {/* <Card activity={'activity'} /> */}
                    {/* <Card /> */}
                </div>
            </div>
        </section>
    )
}