export const reviewAdd = (review, rating) => {
    return {
        type: 'review/add',
        payload: review, rating
    }
}
