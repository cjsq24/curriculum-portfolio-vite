type TProps = {
  title: string;
};

const HeaderTitle = ({ title }: TProps) => {
  return (
    <div className="l-header-title-container">
      <span className="l-header-title">{title}</span>
      <div className="l-header-title-bottom-line" />
    </div>
  );
};

export default HeaderTitle;
