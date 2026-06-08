export const SITE_URL = "https://tucalmapsicologia.com";
export const SITE_NAME = "tuCalma Psicología";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/img/placeholder/1113x510.jpg`;

export const pageSeo = {
  home: {
    path: "/",
    title: "tuCalma Psicología | Psicoterapia y bienestar emocional",
    description:
      "Psicoterapia para ansiedad, estrés y bienestar emocional. Acompañamiento cercano y profesional en tuCalma Psicología. Terapia online.",
  },
  about: {
    path: "/quien-soy",
    title: "Quién soy | tuCalma Psicología",
    description:
      "Conoce a Paula Pedival de Paz, psicoterapeuta con una mirada integrativa y holística centrada en el bienestar emocional.",
  },
  helpYou: {
    path: "/puedo-ayudar",
    title: "Te ayudo | tuCalma Psicología",
    description:
      "Acompañamiento psicológico para ansiedad, estrés, regulación emocional y procesos personales desde una psicoterapia cercana e integrativa.",
  },
  howTo: {
    path: "/como-lo-hacemos",
    title: "Cómo lo hacemos | tuCalma Psicología",
    description:
      "Descubre cómo es el proceso terapéutico en tuCalma Psicología y cómo se adapta el acompañamiento a cada persona.",
  },
};

export function canonicalUrl(path) {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}
