import { ScrollToTop } from "../components";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="relative">
      <ScrollToTop />

      {/* Hero / Header */}
      <div className="bg-object h-[220px] sm:h-[260px] lg:h-[320px] relative flex items-center justify-center bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white z-10 font-primary text-center">
          {t("contact.heroTitle")}
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t("contact.getInTouch")}
            </h2>
            <p className="text-lg text-tertiary md:text-xl leading-relaxed">
              {t("contact.intro")}
            </p>

            <div className="space-y-4 text-gray-700">
              <p>{t("contact.address.street")}</p>
              <p>{t("contact.address.city")}</p>
              <p>
                {t("contact.phone.label")}:
                {t("contact.phone.numbers", { returnObjects: true }).map(
                  (num, i) => (
                    <span key={i}>
                      {" "}
                      <a
                        href={`tel:${num}`}
                        className="hover:text-accent transition"
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
                  className="hover:text-accent transition"
                >
                  {t("contact.email.address")}
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6 md:p-10">
            <ContactForm />
          </div>
        </div>

        <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title={t("contact.mapTitle")}
            src={t("contact.mapUrl")}
            className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
