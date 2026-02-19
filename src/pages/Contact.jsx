import { ScrollToTop } from "../components";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="relative">
      <ScrollToTop />

      {/* Hero / Header */}
      <div className="bg-lokacija h-[220px] sm:h-[280px] lg:h-[360px] relative flex items-center justify-center bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white z-10 font-primary text-center">
          {t("contact.heroTitle")}
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8 bg-accent/10 p-6 md:p-10 rounded-2xl shadow-xl border border-accent/20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t("contact.getInTouch")}
            </h2>
            <p className="text-lg md:text-xl text-tertiary leading-relaxed">
              {t("contact.intro")}
            </p>

            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">{t("contact.address.street")}</p>
              <p>{t("contact.address.city")}</p>
              <p>
                {t("contact.phone.label")}:
                {t("contact.phone.numbers", { returnObjects: true }).map(
                  (num, i) => (
                    <span key={i}>
                      {" "}
                      <a
                        href={`tel:${num}`}
                        className="hover:text-accent transition-colors duration-300"
                      >
                        {num}
                      </a>
                      {i <
                      t("contact.phone.numbers", { returnObjects: true })
                        .length -
                        1
                        ? " /"
                        : ""}
                    </span>
                  ),
                )}
              </p>
              <p>
                {t("contact.email.label")}:{" "}
                <a
                  href={`mailto:${t("contact.email.address")}`}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {t("contact.email.address")}
                </a>
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-10 border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
          <iframe
            title={t("contact.mapTitle")}
            src={t("contact.mapUrl")}
            className="w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
