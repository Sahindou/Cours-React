//import
//import

const Paragraph = (props) => {
    const isTrue = props.isTrue;
    const text = isTrue ? "Bonjour" : "Good-Bye"

    return (
        <p>{text}</p>
    )
}

export default Paragraph;