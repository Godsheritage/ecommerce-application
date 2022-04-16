import icon1 from '../assets/img/icons/1.png'
import icon2 from '../assets/img/icons/2.png'
import icon3 from '../assets/img/icons/3.png'

const Features = () => {
  return (
    <div>
      <section className="features-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 p-0 feature">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={icon1} alt="#" />
                </div>
                <h2>Fast Secure Payments</h2>
              </div>
            </div>
            <div className="col-md-4 p-0 feature">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={icon2} alt="#" />
                </div>
                <h2>Premium Products</h2>
              </div>
            </div>
            <div className="col-md-4 p-0 feature">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={icon3} alt="#" />
                </div>
                <h2>Free & fast Delivery</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
