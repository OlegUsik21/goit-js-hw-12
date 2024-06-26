import axios from "axios";

export async function getImages (query, onCurrentPage) {
    const response = await axios.get("https://pixabay.com/api/", {
        params: {
            key: '44402114-eddf09e8e038ad1f496236950',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 15,
            page: onCurrentPage,
        }
    });
    return response.data
}