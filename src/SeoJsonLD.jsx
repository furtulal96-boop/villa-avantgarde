import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SEOJsonLD = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";

    // JSON-LD objekt
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Hotel",
      name: t("meta.title", "Villa Avantgarde"),
      image: "https://www.villaavantgarde.com/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: t("address.city", "Dubrovnik"),
        addressCountry: t("address.country", "HR"),
      },
      url: "https://www.villaavantgarde.com",
      telephone: "+385995263114",
      priceRange: "€€",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: t("amenities.wifi", "Free WiFi"),
        },
        {
          "@type": "LocationFeatureSpecification",
          name: t("amenities.parking", "Parking"),
        },
        {
          "@type": "LocationFeatureSpecification",
          name: t("amenities.breakfast", "Breakfast"),
        },
      ],
    };

    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [i18n.language, t]);

  return null;
};

export default SEOJsonLD;
