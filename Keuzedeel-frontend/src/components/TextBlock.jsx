const TextBlock = ({ title, description, email}) => {
    return (
      <div className="flex flex-col bg-white md:px-10 py-4">
        <div className="px-8 md:px-16 text-black ">
            <h3 className="text-ms md:text-2xl font-bold mb-2">{title}</h3>
            <p className="text-xs md:text-base">{description}</p>
            <p className="mb-4">
              <a href={`mailto:${email}`} className="text-blue-500 hover:underline text-xs md:text-base">
                {email}
              </a>
            </p>
        </div>
      </div>
    );
  };
  
  export default TextBlock; 