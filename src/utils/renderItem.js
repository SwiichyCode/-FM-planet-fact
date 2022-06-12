export const renderText = (planets, params) => {
  if (params === "overwiew") {
    return <p>{planets.overview.content}</p>;
  }
  if (params === "structure") {
    return <p>{planets.structure.content}</p>;
  }
  if (params === "surface") {
    return <p>{planets.geology.content}</p>;
  }
};

export const renderImg = (planets, params) => {
  if (params === "overwiew") {
    return <img className="planet-img" src={planets.images.planet} alt="" />;
  }
  if (params === "structure") {
    return <img className="planet-img" src={planets.images.internal} alt="" />;
  }
  if (params === "surface") {
    return (
      <div className="content-img-geology">
        <img src={planets.images.planet} className="planet-img" alt="" />
        <img
          className="planet-img-geology"
          src={planets.images.geology}
          alt=""
        />
      </div>
    );
  }
};

export const renderSource = (planets, params, img) => {
  if (params === "overwiew") {
    return (
      <a href={planets.overview.source} alt="">
        Wikipedia <img src={img} alt="" />
      </a>
    );
  }
  if (params === "structure") {
    return (
      <a href={planets.structure.source} alt="">
        Wikipedia <img src={img} alt="" />
      </a>
    );
  }
  if (params === "surface") {
    return (
      <a href={planets.geology.source} alt="">
        Wikipedia <img src={img} alt="" />
      </a>
    );
  }
};
