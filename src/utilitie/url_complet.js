const url_complet = (category, lang, keyword) => {
    const baseUrl = 'https://api.mediastack.com/v1/news?access_key=da7d3236b40f1d0576befaa5d88453c5';

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