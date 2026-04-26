import { FaPhone, FaMapMarkerAlt, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Location */}
        <div className="footer-section">
          <h3>Location</h3>
          <p>
            <FaMapMarkerAlt /> City Mall, Level 7, Room 898
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p><FaPhone /> +256 742 754527</p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a 
            href="https://www.tiktok.com/@Carpet station" 
            target="_blank" 
            rel="noreferrer"
            className="tiktok-link"
          >
            <FaTiktok /> TikTok
          </a>
        </div>

      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Carpet Station. All rights reserved.
      </p>
    </footer>
  );
}