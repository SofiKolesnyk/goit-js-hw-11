import Notiflix from 'notiflix';
import { searchQuery } from '../index'
import axios from 'axios';
import { currentPage } from '../index';

export async function getGallery() { 
    try { 
        const searchParams = new URLSearchParams({ 
            key: '31555208-97df9fea643c1216f40ca43bb', 
            q: searchQuery.value.split(' ').join('+'), 
            image_type: 'photo', 
            orientation: 'horizontal', 
            safesearch: true, 
            page: currentPage, 
            per_page: 40, 
            }); 

        const response = await axios.get(`https://pixabay.com/api/?${searchParams}`); 
 
        if (response.status !== 200) { 
            throw new Error(response.status); 
        } 
    
        return response.data; 
    } catch (error) { 
        Notiflix.Notify.failure(error.message); 
    } 
} 
