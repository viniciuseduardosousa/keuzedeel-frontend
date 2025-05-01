const ProjectenCard = ({ image, name, link }) => {
    return (
        <div className="projecten-card flex flex-col items-center text-center cursor-pointer transition-transform transform hover:scale-101 p-1">
            <img 
                src={image} 
                alt={name} 
                href={link}
                className="w-40 h-30 rounded-sm object-cover " 
            />
            <h3 className="text-lg font-semibold hover:underline "><a href={link}>{name} →</a></h3>
        </div>
    );
};

export default ProjectenCard;