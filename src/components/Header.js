import logo from "../assets/images/airbnb.svg"

export default function Header() {
    return (
        <header className="App-header">
            <div className="container">
                <nav className="nav">
                    <img src={logo} alt="Airbnb" className="App-logo" width="120px" />
                </nav>
            </div>
        </header>
    )
}