import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="relative w-full py-10 mt-12"> {/* increased top & bottom padding */}
      {/* Centered social icons */}
      <div className="flex justify-center items-center gap-6 mb-6">
        {socialImgs.map((socialImg, index) => (
          <a
            key={index}
            href={socialImg.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              src={socialImg.imgPath}
              alt={`${socialImg.name} icon`}
              className="h-6 w-6"
            />
          </a>
        ))}
      </div>

      {/* Trademark / */}
      <p className="absolute bottom-6 right-10 text-sm text-right">
        © {new Date().getFullYear()} Geeran Balaranjan
      </p>
    </footer>
  );
};

export default Footer;
