import { LogoWhite } from "../assets";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex items-center gap-6 sm:justify-between flex-col sm:flex-row px-6">
        <a href="/" className="h-[80px] flex items-center">
          <LogoWhite className="h-full w-auto object-contain" />
        </a>

        <div className="flex flex-col items-center text-center sm:text-left">
          <p className="text-sm sm:text-base">
            {t("footer.copyright", {
              year: new Date().getFullYear(),
              hotelName: "Villa Avantgarde",
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
