function PageBlock({ id, label, children }) {
    return (
      <section id={id} className="page-block">
        <h2>{label}</h2>
        {children}
      </section>
    );
  }

export default PageBlock