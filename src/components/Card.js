import star from "../assets/images/Star.png";

export default function Card({activity}) {
    let item = activity;
    let badgeText;
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"     
    }

    return (
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={item.image} alt={item.title} className="card-img" height="280px" />
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