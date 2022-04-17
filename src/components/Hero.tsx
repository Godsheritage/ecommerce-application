import "./hero.scss";
import bg from "../assets/img/bg.jpg";
import bg2 from "../assets/img/bg-2.jpg";





const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade hero"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner hero">
          <div className="carousel-item active">
            <img src={bg} className="d-block w-100 img" alt="..." />
            <span className="txt">
              <p className="h5">NEW ARRIVALS</p>
              <p className="display-4 text-white">DENIM JACKETS</p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Laudantium maiores ullam a assumenda commodi iusto non
                <br />
                omnis adipisci quasi magnam, nisi, eveniet impedit reprehenderit
                <br />
                totam incidunt numquam esse totam recusandae deserunt sit sunt
                <br />
                rerum! Doloremque ab sapiente repellendus suscipit corporis
                <br /> neque in eos.
              </p>
              <div className="d-flex flex-row justify-content-between w-100 ">
                <button className="btn btn-primary">Discover</button>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </span>
          </div>
          <div className="carousel-item">
            <img src={bg2} className="d-block w-100 img" alt="..." />
            <span className="txt">
              <h3>NEW ARRIVALS</h3>
              <h1>DENIM JACKETS</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium maiores ullam a assumenda commodi iusto non omnis
                adipisci quasi magnam, nisi, eveniet impedit reprehenderit totam
                laborum minus pariatur voluptas qui. Fuga quidem suscipit odio
                saepe laboriosam porro, hic, quo nostrum ullam voluptatibus
                incidunt numquam esse totam recusandae deserunt sit sunt rerum!
                Doloremque ab sapiente repellendus suscipit corporis neque in
                eos.
              </p>
              <button className="btn btn-primary">Discover</button>
              <button className="btn btn-primary">Add to cart</button>
            </span>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  </div>
  )
}


{/* 
<div className="carousel-inner hero">
          <div className="carousel-item active">
            <img src={bg} className="d-block w-100 img" alt="..." />
            {heroText.map((heroItem) => (
              <span className="txt">
                <p className="h5">{heroItem.subHeading}</p>
                <p className="display-4 text-white">{heroItem.heading}</p>
                <p className="text-white">{heroItem.text}</p>
                <div className="d-flex flex-row justify-content-between w-100 ">
                  <button className="btn btn-primary">
                    {heroItem.btn1Text}
                  </button>
                  <button className="btn btn-primary">
                    {heroItem.btn2Text}
                  </button>
                </div>
              </span>
            ))}
          </div>
    </div> */}
  

export default Hero;
