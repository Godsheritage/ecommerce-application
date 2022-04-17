import Header from "../components/Header";
import Footer from "../components/Footer";
import FavouriteProducts from "../components/FavouriteProducts";


const Contact: React.FC = () => {
  return (
    <div>
      <Header />

      <div className="page-top-info">
        <div className="container">
          <h4>Contact</h4>
          <div className="site-pagination">
            <a href="">Home</a> /<a href="">Contact</a>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 contact-info">
              <h3>Get in touch</h3>
              <p>Main Str, no 23, New York</p>
              <p>+546 990221 123</p>
              <p>hosting@contact.com</p>
              <div className="contact-social">
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </div>
              <form className="contact-form">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Your e-mail" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button className="site-btn">SEND NOW</button>
              </form>
            </div>
          </div>
        </div>
        <div className="map">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522"
            style="border:0"
            allowfullscreen
          ></iframe> */}
        </div>
      </section>

      <FavouriteProducts/>
      <Footer />
    </div>
  );
};

export default Contact;
