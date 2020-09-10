import React from 'react'

export function Rating(props) {
    const { score, count } = props

    if (parseInt(count) === 0) {
        return null;
    } else {
        return <div className="itemRating">
            <div className="ratingBg">
                <img src="./images/RatingStars.png" alt="Rating Bar"></img>
                <div className={"rating score-" + score}>
                    <img src="./images/RatingStars-on.png" alt="Rating"></img>
                </div>

            </div>

            <span className="ratingCount">({count})</span>
        </div>
    }
}