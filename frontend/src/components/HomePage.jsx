import imgWeAre from "../assets/header.jpg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="weAre">
        <h2 className="weAre_h2">Qui sommes-nous ?</h2>
        <div className="weAre_form">
          <p className="weAre_p">
            Nos valeurs humaines et professionnelles
            <br />
            Externatic, c’est avant tout une équipe d’experts IT, tous animés
            par la même passion des relations humaines. L’intelligence
            émotionnelle et l’éducation cognitive ne peuvent être remplacées par
            des algorithmes. Notre cabinet de recrutement s’appuie sur des
            méthodes authentiques, où l’humain est tout simplement
            indispensable. Depuis 12 ans, externatic a développé un savoir-faire
            sur le recrutement de profils pénuriques. Ces compétences nous
            permettent d’intervenir sur d’autres secteurs que l’IT. Notamment
            l’industrie avec Induseo et la cybersécurité avec Underguard.
          </p>
          <img src={imgWeAre} className="weAre_img" alt="Qui sommes nous" />
        </div>
      </div>
      <div className="slideShow">
        <div className="slideShow_box">
          <h2 className="slideShow_h2">Développeur full Stack JS</h2>
          <p className="slideShow_p">Lyon</p>
        </div>
        <div className="slideShow_box middle">
          <h2 className="slideShow_h2">Ingénieur Python</h2>
          <p className="slideShow_p">Lille</p>
        </div>
        <div className="slideShow_box">
          <h2 className="slideShow_h2">Teach Lead android</h2>
          <p className="slideShow_p">Valence</p>
        </div>
      </div>
    </>
  );
}
