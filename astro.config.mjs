// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://bomffas.github.io",
  integrations: [mdx(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "@components": "src/components",
        "@": "src/",
      },
    },
  },
  redirects: {
    "/linkedin": {
      status: 301,
      destination: "https://www.linkedin.com/in/bomffas",
    },
    "/newsletter": {
      status: 301,
      destination: "/",
    },
    "/frontin-campinas-primeira-edic3a7c3a3o-2018-9dc1f72adf4a": {
      status: 301,
      destination: "/blog/frontin-campinas-primeira-edicao-2018",
    },
    "/preciso-de-faculdade-para-trabalhar-com-tecnologia-19532d449244": {
      status: 301,
      destination: "/blog/preciso-de-faculdade-para-trabalhar-com-tecnologia",
    },
    "/por-que-vocc3aa-deveria-ir-em-eventos-tech-ou-relacionados-78bceb03d1f": {
      status: 301,
      destination: "/blog/por-que-voce-deveria-ir-em-eventos-tech",
    },
    "/trabalho-em-sampa-e-primeiros-meetups-2021-fbb6d5726e1a": {
      status: 301,
      destination: "/blog/experiencia-trabalhar-sao-paulo-fretado-vs-morar",
    },
    "/sobre-o-curso-product-manager-7ddff30d8032": {
      status: 301,
      destination: "/blog/experiencia-curso-product-manager-product-arena",
    },
    "/frontinbh-2017-um-evento-mc3a1gico-7fa185ac0b60": {
      status: 301,
      destination: "/blog/frontinbh-2017-experiencia-evento-maravilhoso",
    },
    "/ux-team-summit-2017-b7be0b519c83": {
      status: 301,
      destination: "/blog/ux-team-summit-2017-primeiro-evento-experiencias",
    },
    "/front-in-sampa-2017-e-code-in-the-dark-cd5ede532869": {
      status: 301,
      destination: "/blog/front-end-week-2017-front-in-sampa-code-in-the-dark",
    },
    "/a-voz-do-rock-a-final-2b2d3dce5b15": {
      status: 301,
      destination: "/blog/voz-do-rock-2017-final-festival-experiencia",
    },
    "/a-voz-do-rock-2017-novos-amigos-e-boas-experiencias-2a2580c2a80b": {
      status: 301,
      destination:
        "/blog/voz-do-rock-2017-primeira-eliminatoria-experiencia-palco",
    },
  },
});
