import axios from "axios"

const ncgamesAPI = axios.create({
    baseURL: 'https://nc-games-bp.onrender.com/api/'
})

export function GetReviews() {
    return ncgamesAPI.get(`/reviews`).then((res) => {
        return res.data
    }).catch((err) => { console.log(err, "<- GetReviews") })
}
