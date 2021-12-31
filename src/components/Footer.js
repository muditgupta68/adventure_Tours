import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <h4>© 2021 Adventure Tours! No rights reserved : Personal project</h4>
      <h4>
        Created with <span className="love">❤</span>
        <a
          href="https://github.com/muditgupta68"
          target="_blank"
          rel="noopener noreferrer"
          className="author"
        >
          Mudit Gupta
        </a>
      </h4>
    </div>
  );
}

export default Footer;
