"use client";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-inner">
        <h2>Contact</h2>

        <p className="contact-line">
          <span>Story Tips: </span>
          <a href="mailto:jkim@nyunews.com">jkim@nyunews.com</a>
        </p>
        <p className="contact-line">
          <span>General Inquiries: </span>
          <a href="mailto:jkim@nyunews.com">jjk9916@nyu.edu</a>
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


      </div>
    </section>
  );
}