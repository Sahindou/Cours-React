//import
import '../styles/ErrorMessage.css'

const ErrorMessage = ({message}) => {
    if(!message) return null;

    return (
        <strong className={"msg_erreur"}> {message}</strong>
    )
}

export default ErrorMessage;