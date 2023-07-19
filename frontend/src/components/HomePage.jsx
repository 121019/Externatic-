import imgWeAre from "../assets/header.jpg";
import imgValue from "../assets/value.jpeg";
import "./HomePage.css";

export default function HomePage() {
  // Fonction pour faire défiler vers la gauche (flèche précédente)
  const handlePrev = () => {};

  // Fonction pour faire défiler vers la droite (flèche suivante)
  const handleNext = () => {};
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
      <div className="carousel">
        <button type="button" className="prevBtn" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="carousel1">
          <div className="carousel2__face">
            <a href="https://www.externatic.fr/offre-emploi/infrastructure-cloud/responsable-support-it-h-f-dsi-6/">
              <span>Responsable Support IT H/F @DSI</span> <br />
              <span>Niort</span>
            </a>
          </div>
          <div className="carousel2__face">
            <a href="https://www.externatic.fr/offre-emploi/net-c/developpeur-c-net-h-f-19/">
              <span>Développeur C# .NET H/F</span>
              <br />
              <span>Niort</span>
            </a>
          </div>
          <div className="carousel2__face">
            <a href="https://www.externatic.fr/offre-emploi/infrastructure-cloud/chef-de-projet-infrastructure-h-f-19/">
              <span>Chef de Projet Infrastructure H/F</span>
              <br />
              <span> La Roche-sur-Lyon</span>
            </a>
          </div>
          <div className="carousel2__face">
            <a href="https://www.externatic.fr/offre-emploi/c-c/ingenieur-logiciel-simulation-haut-niveau-c-c-h-f/">
              <span>Ingénieur logiciel Simulation (Haut niveau) C/C++ H/F</span>
              <br />
              <span> Saint-Tropez</span>
            </a>
          </div>
          <div className="carousel2__face">
            <a href="https://www.externatic.fr/offre-emploi/net-c/developpeur-confirme-c-ou-c-net-x-f-h-5/">
              <span>Développeur confirmé C++ ou C#/.NET – X/F/H </span>
              <br />
              <span>Mont-de-Marsan</span>
            </a>
          </div>
          <div className="carousel2__face">
            <a href="https://www.externatic.fr/offre-emploi/data-big-data-datascience/senior-data-engineer-h-f/">
              <span>Senior Data Engineer H/F</span>
              <br />
              <span>Nantes</span>
            </a>
          </div>
          <div className="carousel2__face">
            <a href="https://www.externatic.fr/offre-emploi/autres-technologies/developpeur-back-end-h-f-agence-4/">
              <span>Développeur back-end H/F </span>
              <br />
              <span>Cholet</span>
            </a>
          </div>
          <div className="carousel2__face">
            <a href="https://www.externatic.fr/offre-emploi/devops/devops-h-f-industrie-5/">
              <span>DevOps Industrie H/F</span>
              <br />
              <span> Angers</span>
            </a>
          </div>
          <div className="carousel2__face">
            <a href="https://www.externatic.fr/offre-emploi/c-c/team-lead-c-h-f-2/">
              <span>Team Lead C++ H/F </span>
              <br />
              <span>Saint-Herblain</span>
            </a>
          </div>
        </div>
        <button type="button" className="nextBtn" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <div className="value">
        <div className="value_triangle">
          <div className="value_form">
            <h2 className="value_h2">
              Bienveillance, Professionnalisme, Durabilité
            </h2>
            <p className="value_p">
              Notre mission de connecter les bonnes personnes, commence avec des
              rencontres. Notre professionnalisme nous permet de construire de
              vraies relations. Nous mettons en place des équipes qui
              représentent les valeurs des entreprises sur le long-terme.
            </p>
          </div>
          <img src={imgValue} className="value_img" alt="Valeur" />
        </div>
      </div>
      <div className="youtube">
        <h2 className="youtube_h2">Présentation en vidéo</h2>
        <iframe
          className="youtube_video"
          src="https://www.youtube-nocookie.com/embed/BYmNVsS5J58"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        >
          {/* Intentionally left empty */}
        </iframe>
      </div>
    </>
  );
}
