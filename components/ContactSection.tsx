"use client";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-inner">
        <h2>Contact</h2>

        <p className="contact-line">
          <span>Email</span>
          <a href="mailto:jkim@nyunews.com">: jkim@nyunews.com</a>
        </p>
        
        <p className="contact-line">
          <span>LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/julia-kim-700311214"
            target="_blank"
            rel="noopener noreferrer"
          >
            : Julia Kim
          </a>
        </p>

        <p className="contact-line">
          <span>Instagram</span>
          <a
            href="https://www.instagram.com/jjulia.kim"
            target="_blank"
            rel="noopener noreferrer"
          >
            : @jjulia.kim
          </a>
        </p>

      </div>
    </section>
  );
}