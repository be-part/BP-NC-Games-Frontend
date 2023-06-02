import axios from "axios"

const ncgamesAPI = axios.create({
    baseURL: 'https://nc-games-bp.onrender.com/api/'
})

export function GetReviews(category) {
    return ncgamesAPI.get(`/reviews`, {params: {category: category }}).then((res) => {
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

export function ChangeVotes(review_id, value) {
    return ncgamesAPI.patch(`/reviews/${review_id}`, {inc_votes: value})
    .then((res) => {
        return res.data
    }).catch((err) => {console.log(err, "<- ChangeVotes") })
}

export function PostComment(review_id, newComment) {
    return ncgamesAPI.post(`/reviews/${review_id}/comments`, newComment)
    .then((res) => {
    return res.data.comment
    }).catch((err) => {console.log(err, "<- PostComment") })
}

export function GetCategories() {
    return ncgamesAPI.get(`categories`).then((res) => {
        return res.data
    }).catch((err) => { console.log(err, "<- GetCategories") })
}
