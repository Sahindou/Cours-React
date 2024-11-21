const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "..."; // Ajoute des points de suspension si le texte est trop long
    }
    return text;
};

export default truncateText;