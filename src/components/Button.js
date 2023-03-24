const Button = (props) => {
    return (
        <div>
            <button onClick={() => props.clicked()}>Di klik disini</button>
        </div>
    )

}

export default Button;