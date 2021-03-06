import axios from "axios";
import { contextTypes } from "../types";
import { useState, useContext } from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import ProductContext from "../context/ProductContext";
import PageTopInfo from "../components/Shared/PageTopInfo";
import ProductSection from "../components/Shared/ProductSection";
import FavouriteProducts from "../components/Home/FavouriteProducts";
import {
  FaBehance,
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const { favouriteProducts, submitContact } = useContext(ProductContext) as contextTypes;

  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  

  //submit contact form
  //TODO work on the form validation
  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (
      name.length === 0 ||
      email.length === 0 ||
      subject.length === 0 ||
      message.length === 0
    ) {
      setError("some required fields are missing");
    }
    e.preventDefault();
    const data = {
      name,
      email,
      subject,
      message,
    };
    // await axios.post("https://localhost:5000/Contact", data);
    await submitContact(data)
  };

  //Contact infos
  const CONTACT_INFO = {
    text: "GET IN TOUCH",
    address: "Main Str, no 23, New York",
    number: "+546 990221 123",
    email: "hosting@contact.com",
  };

  return (
    <div>
      <Header />
      <PageTopInfo page="Contact" link="/contact" />
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 contact-info">
              <h3>{CONTACT_INFO.text}</h3>
              <p>{CONTACT_INFO.address}</p>
              <p>{CONTACT_INFO.number}</p>
              <p>{CONTACT_INFO.email}</p>
              <div className="contact-social">
                <a href="https://.facebook.com">
                  <FaPinterest />
                </a>
                <a href="https://.facebook.com">
                  <FaFacebook />
                </a>
                <a href="https://.facebook.com">
                  <FaTwitter />
                </a>
                <a href="https://.facebook.com">
                  <FaDribbble />
                </a>
                <a href="https://.facebook.com">
                  <FaBehance />
                </a>
              </div>
              <form className="contact-form" onSubmit={submitForm}>
                <input
                  type="text"
                  value={name}
                  placeholder="Your name "
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  type="text"
                  value={email}
                  placeholder="Your e-mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="text"
                  value={subject}
                  placeholder="Subject"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
                <textarea
                  value={message}
                  placeholder="Message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
                {error && <p>{error}</p>}
                <button
                  className={isDisabled ? "site-btn disabled" : "site-btn"}
                  type="submit"
                  // disabled={isDisabled}
                >
                  SEND NOW
                </button>
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
      <ProductSection products={favouriteProducts} header="Your Favourites" />
      {/* <FavouriteProducts /> */}
      <Footer />
    </div>
  );
};

export default Contact;
