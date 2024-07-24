import { useState } from "react";
import starfull from '../assets/starfull.png';
import starhalf from '../assets/starhalf.png';
import star from '../assets/star.png';

const RatingInput = ({ rating, setRating }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const handleMouseEnter = (index) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (index) => {
        setRating(index);
    };

    const renderStar = (index) => {
        if (hoverRating >= index) {
            return starfull;
        } else if (!hoverRating && rating >= index) {
            return starfull;
        } else {
            return star;
        }
    };

    return (
        <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((index) => (
                <img
                    key={index}
                    src={renderStar(index)}
                    alt="Star"
                    className="cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <div className="items-center inline-flex">
            {[...Array(fullStars)].map((_, index) => (
                <img key={index} src={starfull} alt="Star full" />
            ))}
            {[...Array(halfStars)].map((_, index) => (
                <img key={index} src={starhalf} alt="Star half" />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <img key={index} src={star} alt="Star empty" />
            ))}
            <p className="text-zinc-400 text-xs font-medium font-dm-sans underline leading-none tracking-tight ml-2">{rating} (86)</p>
        </div>
    );
};

export default RatingInput;