import axios from 'axios'

const Api = base => {

    const client = axios.create({
        baseURL: base
    })

    const get = endpoint => client.get(endpoint)
    const create = (endpoint, data) => client.post(endpoint, data)

    return {
        getBreed: id => get(`/breeds/${id}`),
        getBreeds: () => get(`/breeds`),

        getAdoptions: () => get(`/adoptions`),
        createAdoption: data => create(`/adoptions/`, data)
    }
}
export default Api