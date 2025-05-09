const ProjectenCard = ({ image, name, link }) => {
    return (
        <div className="projecten-card flex flex-col items-center text-center cursor-pointer transition-transform transform hover:scale-101 p-1">
            <img 
                src={image} 
                alt={name} 
                loading="lazy"
                href={link}
                className="w-65 h-40 md:w-65 md:h-40 rounded-md object-cover " 
            />
            <h3 className="mb:text-lg pt-2 pb-4 font-semibold hover:underline "><a href={link}>{name} →</a></h3>
        </div>
    );
};

export default ProjectenCard;