import axios from "axios"

const ncgamesAPI = axios.create({
    baseURL: 'https://nc-games-bp.onrender.com/api/'
})

export function GetReviews() {
    return ncgamesAPI.get(`/reviews`).then((res) => {
        return res.data
    }).catch((err) => { console.log(err, "<- GetReviews") })
}

export function FetchSingleReview(review_id) {
    return ncgamesAPI.get(`/reviews/${review_id}`).then((res) => {
        return res.data
    }).catch((err) => { console.log(err, "<- FetchSingleReview") })

}

export function GetComments(review_id) {
    return ncgamesAPI.get(`reviews/${review_id}/comments`).then((res) => {
        return res.data
    }).catch((err) => { console.log(err, "<- GetComments") })
}