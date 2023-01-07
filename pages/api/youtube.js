export default async (req, res) => {
    const key = process.env.YOUTUBE_KEY
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&channelId=UCLDmlMl7949IhVDWBjF-rVA&maxResults=50&order=relevance&key=${key}`)
    const json = await response.json()
     
    return res.status(200).json(json.items)
}