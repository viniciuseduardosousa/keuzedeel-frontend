const MensenCard = ({ image, name, link }) => {
    return (
        <div className="mensen-card flex flex-col items-center text-center cursor-pointer transition-transform transform hover:scale-105 p-4">
            <img 
                src={image} 
                alt={name} 
                href={link}
                className="w-40 h-30 rounded-md object-cover mb-4" 
            />
            <h3 className="text-lg font-semibold hover:underline "><a href={link}>{name}</a></h3>
        </div>
    );
};

export default MensenCard;