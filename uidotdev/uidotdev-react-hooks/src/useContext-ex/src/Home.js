import React from "react";
import LocaleContext from "./LocaleContext";

const text = {
  en: {
    header: "Home",
    paragraph: `*In a multi-hundred line assembly file, only one comment 80% of the way down - // Gets tricky here. Check out my Github. *In a multi-hundred line assembly file, only one comment 80% of the way down - // Gets tricky here. Albeit an archaic language, C is still relevant for systems programming. Unit test your methods. C is dead. Djikstra is the man. `
  },
  es: {
    header: "Inicio",
    paragraph: `Al momento de escoger cuál tecnología usar en el frontend de un proyecto nuevo, nos enfrentamos a una delicada e importante decisión que va a influir mucho en el futuro de nuestra aplicación, por lo que es importante escoger tecnologías que complementen y faciliten el desarrollo. Recientemente Facebook hizo público ReactJS, una librería Javascript de código abierto, que les ha beneficiado en el desarrollo de algunas de sus plataformas, por ejemplo Instagram. `
  }
};

export default function Home() {
  return (
    <div className="home">
      <LocaleContext.Consumer>
        {({ locale }) => (
          <React.Fragment>
            <h1>{text[locale].header}</h1>
            <p>{text[locale].paragraph}</p>
          </React.Fragment>
        )}
      </LocaleContext.Consumer>
    </div>
  );
}
