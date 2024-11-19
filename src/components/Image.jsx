//import

 function Image ({isTrue})  {
    //const isTrue = props.isTrue;

    return (
        <img src={isTrue ? "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTq1KZI9GbrTXSAmN0cj7bxaR7lweiUfwxRbGiVgH8SfSVKJyH1"
                            : "https://www.zoologiste.com/images/main/lama.jpg"} alt={'Image sur le cours'}/>
    )
}

export default Image;