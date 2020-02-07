import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const loadBreeds = () => api.get('breeds')

const apis = {
    loadBreeds: loadBreeds
}

export default apis