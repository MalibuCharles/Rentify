import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
    'X-RapidAPI-Key': '6892f44953msh4c8ec8f197fdb63p108af2jsn090ca1c05e8e',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}
