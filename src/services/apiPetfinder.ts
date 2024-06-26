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

export async function getAnimals(
    filters: Record<string, string | null | string[]>,
    page: number
) {
    const { data } = await axios.get('/animals', {
        params: {
            ...filters,
            page,
        },
    })

    return data
}

export async function getAnimalBreeds(type: string) {
    const { data } = await axios.get(`/types/${type}/breeds`)

    return data
}
