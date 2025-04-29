const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

export async function fetcher<T>(endpoint: string): Promise<T> {
    console.log(`Fetching data from: ${API_URL}${endpoint}`)
    const res = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        next: { revalidate: 60 } // ISR toutes les 60s
    })

    if (!res.ok) {
        throw new Error(`Erreur API: ${res.status}`)
    }

    const data = await res.json()
    return data.data
}
