import '../styles/about.css'

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
      </section>

      {/* Content Section */}
      <div className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team of travel enthusiasts dedicated to creating unforgettable journeys. Whether you dream of exploring majestic mountains, pristine beaches, or vibrant cities, we make it happen.
          </p>
        </div>

        <div className="about-grid">
          {/* Vision Section */}
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To inspire people to travel and experience the wonders of the world. We aim to make travel accessible and enjoyable for everyone.
            </p>
          </div>

          {/* Mission Section */}
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To provide exceptional travel experiences tailored to your needs. Your satisfaction is our priority, and we strive to exceed your expectations.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="about-features">
          <h3>Why Choose Us?</h3>
          <div className="features-grid">
            <div className="feature">
              <h4>Experienced Guides</h4>
              <p>Travel with confidence, guided by professionals with deep knowledge of every destination.</p>
            </div>
            <div className="feature">
              <h4>Custom Packages</h4>
              <p>Create the perfect itinerary tailored to your preferences, budget, and schedule.</p>
            </div>
            <div className="feature">
              <h4>24/7 Support</h4>
              <p>We're here to assist you at every stage of your journey, any time, any day.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="about-cta">
        <h3>Ready to explore the world?</h3>
        <p>Join us on an unforgettable journey. Your next adventure awaits!</p>
        <button className="cta-button">Book Now</button>
      </section>
    </div>
  );
};

export default About;
