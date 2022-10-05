interface IBasicInfo {
  label: string;
  value: string;
}

const basicInfo: IBasicInfo[] = [
  { label: 'Profession', value: 'Computer Engineer' },
  { label: 'Country', value: 'Portuguesa - Venezuela' },
  { label: 'Age', value: '26 years' },
];

const AboutMe = () => {
  return (
    <div className="l-about-me-content">
      <div className="l-about-basic-row">
        <div className="l-basic-information">
          <span className="l-about-me-content-title">Basic information</span>
          <div className="l-about-horizontal-line" />
          {basicInfo.map((data, i) => (
            <div key={i} className="l-basic-information-item">
              <span className="l-basic-information-label">{data.label}:</span>
              <span className="l-basic-information-value">{data.value}</span>
            </div>
          ))}
        </div>
        <div className="l-about-vertical-line" />
        <div className="l-about-horizontal-line hidden-xs" />
        <div className="l-about-me-information">
          <span className="l-about-me-content-title">About me</span>
          <div className="l-about-horizontal-line" />
          <span className="l-about-me-paragraph">
            ¡Hola! Mi nombre es Carlos Sosa. Soy Desarrollador Web y Móvil.
            Cuento con más de 4 años de experiencia en el mundo del desarrollo,
            trabajando con PHP, JavaScript y MySql (Usando frameworks como
            JQuery, Bootstrap y ahora aprendiendo Laravel). Tengo un año
            aproximadamente trabajando en proyectos con React, React Native y
            Node JS. Quiero seguir especializándome en estas últimas tecnologías
            y así seguir adquiriendo más experiencia, siempre abierto a
            aprender. Me gusta trabajar en equipo, me gusta el análisis y la
            resolución de problemas más allá de sólo programar.
          </span>
        </div>
      </div>
      <div className="l-about-horizontal-line" />
      <div className="l-about-me-interesting">
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
      </div>
    </div>
  );
};

export default AboutMe;
