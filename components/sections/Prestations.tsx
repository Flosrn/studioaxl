import React from "react";
import LayoutSection from "components/ui/layout-section";
import SvgSignage, { svgSignageAnimation } from "components/ui/animations/services/svg-signage";
import SvgBranding, { svgBrandingAnimation } from "components/ui/animations/services/svg-branding";
import SvgAdvertasing, {
  svgAdvertasingAnimation,
} from "components/ui/animations/services/svg-advertasing";
import SvgWeb, { svgWebAnimation } from "components/ui/animations/services/svg-web";
import Carousel from "components/ui/Carousel/carousel";
import Fade from "react-reveal/Fade";
import ButtonLink from "components/ui/Button/ButtonLink";
import SvgSense, { svgSenseAnimation } from "components/ui/animations/services/svg-sense";
import SvgEditorial, {
  svgEditorialAnimation,
} from "components/ui/animations/services/svg-editorial";
import SvgPrecision, {
  svgPrecisionAnimation,
} from "components/ui/animations/services/svg-precision";
import SvgWrite, { svgWriteAnimation } from "components/ui/animations/services/svg-write";

const items = [
  {
    id: 1,
    title: "Direction artistique",
    description:
      "Vous souhaitez donner un sens personnel et singulier à votre projet ? Racontons ensemble votre histoire.",
    icon: <SvgSignage width={120} className="-mt-4 -ml-3" />,
    animation: svgSignageAnimation,
  },
  {
    id: 2,
    title: "Design UI-UX",
    description:
      "Envie ou besoin de supports numériques ou de visibilité ? Créons votre interface web et/ou mobile.",
    icon: <SvgWeb width={120} className="-mt-4 ml-1" />,
    animation: svgWebAnimation,
  },
  {
    id: 3,
    title: "Charte graphique",
    description:
      "Vous souhaitez donner une identité à votre entreprise ? Créons votre logo et votre univers visuel.",
    icon: <SvgBranding width={140} className="-mt-4 -ml-4" />,
    animation: svgBrandingAnimation,
  },
  {
    id: 4,
    title: "Design print & digital",
    description:
      "Besoin de décliner votre identité sur affiches, flyers et réseaux sociaux ? Réalisons le support adapté.",
    icon: <SvgEditorial width={140} className="-mt-5 -ml-1" />,
    animation: svgEditorialAnimation,
  },
  {
    id: 5,
    title: "Exécution",
    description:
      "Besoin d’une retouche photo, d’une carte de visite ou d’un faire-part ? Confiez-moi votre mission !",
    icon: <SvgAdvertasing width={140} className="-mt-3 -ml-3" />,
    animation: svgAdvertasingAnimation,
  },
  {
    id: 6,
    title: "Stratégie & conseil",
    description:
      "Vous souhaitez définir une stratégie d’attaque pour votre projet ? Je vous ferai part de mes conseils.",
    icon: <SvgPrecision width={140} className="-mt-5 -ml-4" />,
    animation: svgPrecisionAnimation,
  },
  {
    id: 7,
    title: "Copywritting",
    description:
      "Augmentons la puissance de votre communication en trouvant les mots adaptés.Touchons votre public.",
    icon: <SvgWrite width={130} className="-mt-3" />,
    animation: svgWriteAnimation,
  },
  {
    id: 8,
    title: "Montage vidéo",
    description:
      "Besoin de monter une vidéo professionnelle ou personnelle ? Je monte vos prises pour vous.",
    icon: <SvgSense width={130} className="-mt-4 -ml-3" />,
    animation: svgSenseAnimation,
  },
];

const Prestations: React.FC = () => (
  <LayoutSection sectionId={1} isDark isTitleLeft title="Prestations">
    <Fade>
      <Carousel items={items} />
    </Fade>
    <Fade>
      <div className="text-white">
        <h6 className="tracking-widest text-gold uppercase text-md"> Et pourquoi pas ?</h6>
        <p className="mt-3 max-w-2xl text-xl italic leading-relaxed">
          Pas de blabla ni d'impossible, tout projet mérite écoute.
        </p>
        <ButtonLink url="/" text="Une question ?" theme="dark" className="mt-5 max-w-max" />
      </div>
    </Fade>
  </LayoutSection>
);
export default Prestations;
