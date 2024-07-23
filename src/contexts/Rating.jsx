import starfull from '../assets/starfull.png';
import starhalf from '../assets/starhalf.png';
import star from '../assets/star.png';

const Rating = ({ rating }) => {
    const validRating = typeof rating === 'number' && rating >= 0 && rating <= 5 ? rating : 0;
    const fullStars = Math.floor(validRating);
    const halfStars = validRating % 1 >= 0.5 ? 1 : 0;
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
            <p className="text-zinc-400 text-xs font-medium font-dm-sans underline leading-none tracking-tight ml-2">{validRating} (86)</p>
        </div>
    );
};

export default Rating;
