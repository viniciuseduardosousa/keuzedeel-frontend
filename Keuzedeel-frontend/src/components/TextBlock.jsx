import { Link } from "react-router-dom";
const TextBlock = ({ title, description, email}) => {
    return (
      <section className="flex flex-col bg-white md:px-10 py-4">
        <div className="px-8 md:px-16 text-black ">
            <h3 className="text-lg md:text-2xl font-bold mb-2">{title}</h3>
            <p className="text-sm md:text-base">{description}</p>
            <p className="mb-4">
              <Link aria-label={`email to ${email}`} to={`mailto:${email}`} className="text-blue-500 hover:underline text-xs md:text-base">
                {email}
              </Link>
            </p>
        </div>
      </section>
    );
  };
  
  export default TextBlock; 