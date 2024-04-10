import axios from '../lib/axios'

const clientId = import.meta.env.VITE_PETFINDER_API_KEY
const clientSecret = import.meta.env.VITE_PETFINDER_SECRET

export async function getToken() {
    const { data } = await axios.post('/oauth2/token', {
        grant_type: 'client_credentials',
        client_id: clientId,
        clientSecret: clientSecret,
    })

    return data
}

export async function getAnimals() {
    const { data } = await axios.get('/animals')

    return data
}
