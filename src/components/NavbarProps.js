// bisa const 
// function

function Navbar(props) {

    return (
        <div>
            <h1> {props.navHeading} </h1>
            <ul>
                <i> <a href="#">Home</a> </i>
                <i> <a href="#">Library</a> </i>
                <i> <a href="#">Contact</a> </i>
                <i> <a href="#">{props.navText}</a> </i>
            </ul>
        </div>
    )
}

export default Navbar;