import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left side (optional placeholder text) */}
        <div className="flex flex-col justify-center">
          <p> </p>
        </div>

        {/* Social icons */}
        <div className="socials flex items-center gap-4">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}                 // redirect to url
              target="_blank"                      // open in new tab
              rel="noopener noreferrer"            // security best practice
              className="icon transition-transform hover:scale-110"
            >
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
                className="h-6 w-6"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Geeran Balaranjan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
