import axios from 'axios'

const Api = base => {

    const client = axios.create({
        baseURL: base
    })

    const get = endpoint => client.get(endpoint)

    return {
        getBreed: id => get(`/breeds/${id}`),
        getBreeds: () => get(`/breeds`)
    }
}
export default Api