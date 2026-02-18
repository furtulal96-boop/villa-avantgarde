import { LogoDark } from "../assets";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const InfoComponent = () => {
  return (
    <section className="bg-accent/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center space-y-6">
          {/* Logo - centrirano i responsive */}
          <div className="mx-auto w-24 sm:w-28 md:w-32 lg:w-36">
            <LogoDark className="w-full h-auto mx-auto" />
          </div>

          {/* Contact Info */}
          <div className="text-lg space-y-2">
            <p>Iva Dulčića 20/C</p>
            <p>20000 Dubrovnik</p>

            <div className="pt-4 space-y-1">
              <p>
                <a
                  href="tel:+385995263114"
                  className="hover:text-accent transition"
                >
                  +385 99 526 3114
                </a>
              </p>
              <p>
                <a
                  href="tel:+385992435616"
                  className="hover:text-accent transition"
                >
                  +385 99 243 5616
                </a>
              </p>
            </div>

            <div className="pt-4">
              <a
                href="mailto:info@eluize-inn.com"
                className="hover:text-accent transition"
              >
                info@eluize-inn.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 pt-6">
            <a
              href="https://www.facebook.com/eluize.dubrovnik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark transition text-2xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/eluize.dubrovnik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark transition text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="linkedin.com/company/eluize-dubrovnik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark transition text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/channel/UCF0YAK6XCPEwF8RivWhDfzg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark transition text-2xl"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoComponent;
