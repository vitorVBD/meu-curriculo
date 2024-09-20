
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/vitorVBD/meu-curriculo/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}
