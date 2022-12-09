import HeaderTitle from '../components/HeaderTitle';

interface IBasicInfo {
  label: string;
  value: string;
}

const basicInfo: IBasicInfo[] = [
  { label: 'Profesión', value: 'Ingeniero en Informática' },
  { label: 'País', value: 'Caracas - Venezuela' },
  { label: 'Edad', value: '27 años' },
  { label: 'Cel', value: '+58 412 522-1478' },
];

const AboutMe = () => {
  return (
    <section className="l-about-me-container">
      <HeaderTitle title="Información acerca de mi" />
      <article className="l-about-me-content">
        <div className="l-about-basic-row">
          <div className="l-basic-information">
            <span className="l-about-me-content-title">Información Básica</span>
            <div className="l-about-horizontal-line" />
            {basicInfo.map((data, i) => (
              <div key={i} className="l-basic-information-item">
                <span className="l-basic-information-label">{data.label}:</span>
                <span className="l-basic-information-value">{data.value}</span>
              </div>
            ))}
          </div>
          <div className="l-about-vertical-line" />
          <div className="l-about-horizontal-line show-xs" />
          <div className="l-about-me-information">
            <span className="l-about-me-content-title">Acerca de mi</span>
            <div className="l-about-horizontal-line" />
            <span className="l-about-me-paragraph">
              🖐 ¡Hola! Mi nombre es Carlos Sosa. Soy{' '}
              <b>Desarrollador Web y Móvil</b>. 💻📱
              <br />
              <br />
              Cuento con más de 5 años de experiencia en el mundo de la
              programación, trabajando en las siguientes tecnologías:
              <b style={{ marginLeft: 5 }}>
                (Javascript | Typescript | React Js | React Native | Node JS |
                PHP | HTML5 | CSS3 | Git)
              </b>
              . Mi principal fuerte es Javascript 💪 <br />
              <br />
              En mi carrera profesional me he desempeñado en varios roles tales
              como Frontend, Backend y Full Stack, pero últimamente he estado
              trabajando únicamente como Frontend con React Native, adentrándome
              más en el mundo de las Aplicaciones Móviles. 📱
              <br />
              <br />
              Soy un apasionado del desarrollo. Me gusta mucho la resolución de
              problemas, lo cual puedo considerar como una de mis principales
              fortalezas. Me gusta compartir mis conocimientos y siempre estoy
              abierto a aprender. 💪
            </span>
          </div>
        </div>
        <div className="l-about-horizontal-line" />
        <div className="l-about-me-interesting">
          <span>
            Mi principal objetivo es seguir especializandome como Frontend. En
            mis intereses están aprender NextJS para web y Kotlin para Android.
            También mejorar mi inglés para aumentar mi probabilidad de mejores
            oportunidades. 😀
          </span>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
