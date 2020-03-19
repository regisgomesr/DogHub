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

        createAdoption: data => create(`/adoptions/`, data),
        getAdoptions: () => get(`/adoptions`)
    }
}
export default Api