import axios from "axios"

const ncgamesAPI = axios.create({
    baseURL: 'https://nc-games-bp.onrender.com/api/'
})

export function getReviews(searchQuery) {
    return ncgamesAPI.get(`/reviews`, {params: searchQuery}).then((res) => {
        return res.data
    }).catch((err) => { return err })
}

export function fetchSingleReview(review_id) {
    return ncgamesAPI.get(`/reviews/${review_id}`).then((res) => {
        return res.data
    }).catch((err) => {return err })

}

export function getComments(review_id) {
    return ncgamesAPI.get(`reviews/${review_id}/comments`).then((res) => {
        return res.data
    }).catch((err) => { return err })
}

export function changeVotes(review_id, value) {
    return ncgamesAPI.patch(`/reviews/${review_id}`, {inc_votes: value})
    .then((res) => {
        return res.data
    }).catch((err) => {return err })
}

export function postComment(review_id, newComment) {
    return ncgamesAPI.post(`/reviews/${review_id}/comments`, newComment)
    .then((res) => {
    return res.data.comment
    }).catch((err) => {return err })
}

export function getCategories() {
    return ncgamesAPI.get(`categories`).then((res) => {
        return res.data
    }).catch((err) => { return err })
}
