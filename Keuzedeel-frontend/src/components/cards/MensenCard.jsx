const MensenCard = ({ image, name, link }) => {
    return (
        <div className="mensen-card flex flex-col items-center text-center cursor-pointer transition-transform transform hover:scale-105 p-4">
            <img 
                src={image} 
                alt={name} 
                href={link}
                className="w-full h-30 rounded-md object-cover" 
            />
            <h3 className="text-xl mt-1 font-semibold hover:underline "><a href={link}>{name}</a></h3>
        </div>
    );
};

export default MensenCard;