const url_complet = (category, lang, keyword) => {
    const baseUrl = 'https://api.mediastack.com/v1/news?access_key=dc3f1a86cd783eda35adc56e01564200';

    let params = [];

    category.length !== 0 ? params.push(`&category=${category}`) : null;


    if (lang.length !== 0) {
        params.push(`&languages=${lang}`);
    }

    if (keyword) {
        params.push(`&keywords=${keyword}`);
    }

    // Ajoute les paramètres à l'URL de base
    return `${baseUrl}${params.length ?  params.join('&') : ''}`;
};

export default url_complet;