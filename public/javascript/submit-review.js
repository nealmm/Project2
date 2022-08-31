let reviewRating = document.getElementById('review-rating');
let reviewTitle = document.getElementById('review-title');
let reviewBody = document.getElementById('review-body');

async function submitReviewFormHandler(event) {
    event.preventDefault();

    const placeId = decodeURIComponent(window.location.href.split('/')[5]);
    const rating  = reviewRating.value;
    const title   = reviewTitle.value;
    const bodyTxt = reviewBody.value;

    const response = await fetch('/api/review', {
        method: 'post',
        body: JSON.stringify({
            placeId,
            rating,
            title,
            bodyTxt
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.getElementById('review-form').addEventListener('submit', submitReviewFormHandler);