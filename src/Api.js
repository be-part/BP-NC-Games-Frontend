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

export function GetVotes(review_id) {
    return ncgamesAPI.patch(`/reviews/${review_id}`, {inc_votes: 1})
    .then((res) => {
    return res.data
    }).catch((err) => {console.log(err, "<- GetVotes") })
}

export function RemoveVotes(review_id) {
    return ncgamesAPI.patch(`/reviews/${review_id}`, {inc_votes: -1})
    .then((res) => {
    return res.data
    }).catch((err) => {console.log(err, "<- GetVotes") })
}