/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "BMW E24 ~ 635 CSI",
    description:
      "biała perła, 1985 rok, 3.5L, 218KM, 5 biegów, 2 drzwi, 4 miejsca, 1 kierowca",
    url: "https://i.pinimg.com/originals/a5/1e/ac/a51eaca6fed667debde18f623d48c7c4.jpg",
  },
  {
    title: "BMW E46 ~ 330 CI",
    description:
      "Imolarot, 2001 rok, 3.0L, 231KM, Tip-Tronic, Coupe",
    url: "https://scalethumb.leparking.fr/unsafe/331x248/smart/https://cloud.leparking.fr/2022/03/14/05/06/bmw-3er-bmw-m3-e46-imolarot-rot_8450499895.jpg",
  },
  {
    title: "BMW E34 ~ 535i",
    description:
      "Srebro, czerwone skóry, 1990 rok, 3.5L, 211KM, 5 biegów, Sedan",
    url: "https://i.pinimg.com/736x/2f/5e/fb/2f5efbb54e67543567907e9c1eb143b6.jpg",
  },
  {
    title: "brak mi pomysłu",
    description:
      "Mercedes Vito 2015 rok, 2.2L, 136KM",
    url: "https://c8.alamy.com/comp/2BH7GDM/2010-red-mercedes-benz-vito-120-cdi-swb-a-vehicular-traffic-moving-vehicles-driving-vehicle-on-uk-roads-motors-motoring-on-the-m6-motorway-highway-2BH7GDM.jpg",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 id="oki" style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src="https://scontent-waw2-1.xx.fbcdn.net/v/t1.6435-9/166224313_907121050122550_20271155756844265_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=rqg5e_qysbYQ7kNvgGWTnQE&_nc_ht=scontent-waw2-1.xx&oh=00_AYAiKXx2PMGaGTo5oYROsnGwysQBBq0l-8Fhdee0lt93kQ&oe=66F307A9"
            style={{ height: "550px", width: "900px", objectFit: "none" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <img src={project.url} />
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
