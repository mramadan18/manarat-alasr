const TitlePage = ({ title }) => {
  return (
    <div className="title-page mt-4 mb-3 w-100 d-flex justify-content-center align-items-center gap-2 overflow-hidden">
      <h4 className="title-text position-relative">{title}</h4>
    </div>
  );
};

export default TitlePage;
