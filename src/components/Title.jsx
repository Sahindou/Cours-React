//import
import '../styles/Title.css'

const Title = (props) => {
    const title = "Bonjour"

    const isTrue = props.isTrue;

    return (<h1 className={isTrue ? "blue" : "red"}>{title}</h1>)
}

export default Title;