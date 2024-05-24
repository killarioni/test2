import "./NavBar.css"

export default function NavBar () {
    return (
        <div className="nav">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-solid fa-square-envelope"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                className="topImg"
                src="/images/image_1.jpg" alt="" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}