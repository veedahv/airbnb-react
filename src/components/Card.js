import star from "../assets/images/Star.png"
import wedding from "../assets/images/wedding.jpg"

export default function Card({activity}) {
    console.log(activity);
    // console.log(activity.activity);
    let item = activity;
    return (
        <div className="card">
            <img src={item.image} alt={item.title} className="card-img" width="250px" />
            <div className="card-body">
                <div className="rating">
                    <img src={star} alt="rating star" className="star" width="15px" />
                    <span className="">{item.rating}</span>
                    <span className="">({item.rank}).USA</span>
                </div>
                <p className="">
                    {item.title}
                </p>
                <p className="">
                    <span className="">From ${item.price}</span>
                    / person
                </p>
            </div>
        </div>
    )
}