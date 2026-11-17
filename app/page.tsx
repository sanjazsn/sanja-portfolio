
"use client";

import { useState } from "react";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [flipped, setFlipped] = useState(false);

  return (
    <main className="site-shell" id="top">
      {/* NAVIGATION */}
      <nav className="navigation">
        <a href="#" className="nav-brand">SANJA.</a>

        <div className="nav-links">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="availability" href="#contact">
          <span className="status-dot" />
          OPEN TO OPPORTUNITIES
        </a>
      </nav>

      {/* HERO / PACKAGE */}
      <section className="hero-section">
        <div className="hero-intro">
          <span>INDEPENDENT SOFTWARE ENGINEER</span>
          <span>PORTFOLIO / 001</span>
        </div>

        <div className="package-scene">
          <div className={`package-card ${flipped ? "is-flipped" : ""}`}>

            {/* FRONT OF PACKAGE */}
            <div className="package-face package-front">
              <div className="package-topline">
                <span>PRINTING / SANJA.DEV</span>
                <span>KE — 001</span>
              </div>

              <div className="package-warning">
                <div className="warning-symbol">✳</div>
                <div>
                  <strong>HANDLE WITH CARE</strong>
                  <span>ENGINEERED SYSTEMS INSIDE</span>
                </div>
                <span className="warning-code">FRAGILE / 001</span>
              </div>

              <p className="package-compatibility">
                Compatible with APIs, databases,
                distributed systems and the cloud.
              </p>

              <div className="package-main">
                <div className="package-identity">
                  <span className="eyebrow">CONTENTS / IDENTITY</span>
                  <h1>SANJA<span>.</span></h1>
                  <h2>Backend Software Engineer</h2>
                  <p>
                    Building reliable software, designing
                    backend systems and turning ideas into
                    working products.
                  </p>
                </div>

                <div className="package-includes">
                  <span className="eyebrow">INCLUDES</span>
                  <div><b>01</b> Curious</div>
                  <div><b>02</b> Analytical</div>
                  <div><b>03</b> Detail-oriented</div>
                  <div><b>04</b> Builder</div>
                </div>
              </div>

              <div className="package-specifications">
                <div>
                  <span>CLASSIFICATION</span>
                  <strong>SOFTWARE / ENGINEERING</strong>
                </div>
                <div>
                  <span>ORIGIN</span>
                  <strong>KENYA, EA</strong>
                </div>
                <div>
                  <span>STATUS</span>
                  <strong>IN DEVELOPMENT</strong>
                </div>
              </div>

              <div className="barcode-area">
                <div className="barcode" />
                <span>SNJ-001-2026-ENG</span>
              </div>

              <div className="package-footer">
                <strong>BUILT WITH PRECISION.</strong>
                <span>DESIGNED TO LAST ↗</span>
              </div>

              <button
                className="flip-trigger"
                onClick={() => setFlipped(true)}
                aria-label="Flip package to view tracking history"
              >
                TAP TO TRACK <span>↗</span>
              </button>
            </div>

            {/* BACK OF PACKAGE */}
            <div className="package-face package-back">
              <div className="package-topline">
                <span>SANJA / TRACKING SYSTEM</span>
                <span>REVERSE SIDE / 002</span>
              </div>

              <div className="tracking-heading">
                <span className="eyebrow">SHIPMENT INFORMATION</span>
                <h2>Tracking history<span>.</span></h2>
                <p>A record of the journey so far.</p>
              </div>

              <div className="tracking-carrier">
                <div>
                  <span>CARRIER</span>
                  <strong>INDEPENDENT ENGINEERING</strong>
                </div>
                <div>
                  <span>DESTINATION</span>
                  <strong>THE NEXT BIG THING</strong>
                </div>
              </div>

              <div className="tracking-timeline">
                <div className="tracking-entry current">
                  <div className="tracking-marker" />
                  <div>
                    <span>2026 / PRESENT</span>
                    <strong>Building and exploring</strong>
                    <p>Developing software engineering skills and personal projects.</p>
                  </div>
                  <span className="tracking-status">CURRENT</span>
                </div>

                <div className="tracking-entry">
                  <div className="tracking-marker" />
                  <div>
                    <span>2025 / 2026</span>
                    <strong>Practical engineering experience</strong>
                    <p>Working with software teams and learning through real-world development.</p>
                  </div>
                </div>

                <div className="tracking-entry">
                  <div className="tracking-marker" />
                  <div>
                    <span>THE BEGINNING</span>
                    <strong>Computer Science</strong>
                    <p>Building the foundations of software engineering.</p>
                  </div>
                </div>
              </div>

              <div className="tracking-bottom">
                <span>MORE UPDATES TO COME</span>
                <span>SNJ / 001</span>
              </div>

              <button
                className="flip-trigger back-trigger"
                onClick={() => setFlipped(false)}
                aria-label="Flip back to the front of the package"
              >
                ↶ FLIP BACK TO THE LABEL
              </button>
            </div>
          </div>
        </div>

        <div className="hero-caption">
          <span>BACKEND / SOFTWARE / SYSTEMS</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      
      {/* ABOUT */}
      <section className="content-section about-section" id="about">
        <div className="section-index">
          <span>01 / ABOUT</span>
          <span className="about-index-note">THE PERSON BEHIND THE CODE</span>
        </div>

        <div className="section-content about-content">
          <span className="eyebrow">A BRIEF INTRODUCTION</span>

          <h2>
            Beyond the
            <br />
            <span className="about-accent">code.</span>
          </h2>

          <div className="about-description">
            <p>
              A little about the person behind the projects,
              the interests that drive the work, and the
              approach to solving problems.
            </p>

            <p className="placeholder-note">
              PERSONAL INTRODUCTION — CONTENT TO BE ADDED
            </p>
          </div>

          <div className="about-details">
            <div>
              <span>01 / BACKGROUND</span>
              <strong>To be added</strong>
            </div>

            <div>
              <span>02 / INTERESTS</span>
              <strong>To be added</strong>
            </div>

            <div>
              <span>03 / APPROACH</span>
              <strong>To be added</strong>
            </div>
          </div>
        </div>
      </section>


      
      {/* PROJECTS */}
      <section className="content-section projects-section" id="projects">
        <div className="section-index">
          <span>02 / SELECTED WORK</span>
          <span className="about-index-note">PROJECT ARCHIVE</span>
        </div>

        <div className="section-content projects-content">
          <span className="eyebrow">THINGS I'VE BUILT</span>

          <h2>
            Ideas into
            <br />
            <span className="about-accent">working software.</span>
          </h2>

          <p className="projects-intro">
            A collection of engineering projects, experiments
            and systems currently in development.
          </p>

          <div className="project-grid">
            <article className="project-card">
              <div className="project-card-top">
                <span>PROJECT / 001</span>
                <span>IN DEVELOPMENT</span>
              </div>
              <div className="project-placeholder">
                <span>01</span>
              </div>
              <div className="project-card-info">
                <span>PROJECT NAME</span>
                <h3>Project details coming soon.</h3>
                <p>
                  Description, technical approach and key
                  engineering decisions will be added here.
                </p>
              </div>
              <div className="project-card-bottom">
                <span>BACKEND / SOFTWARE</span>
                <span>↗</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-card-top">
                <span>PROJECT / 002</span>
                <span>IN DEVELOPMENT</span>
              </div>
              <div className="project-placeholder">
                <span>02</span>
              </div>
              <div className="project-card-info">
                <span>PROJECT NAME</span>
                <h3>Project details coming soon.</h3>
                <p>
                  Description, technical approach and key
                  engineering decisions will be added here.
                </p>
              </div>
              <div className="project-card-bottom">
                <span>BACKEND / SOFTWARE</span>
                <span>↗</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-card-top">
                <span>PROJECT / 003</span>
                <span>IN DEVELOPMENT</span>
              </div>
              <div className="project-placeholder">
                <span>03</span>
              </div>
              <div className="project-card-info">
                <span>PROJECT NAME</span>
                <h3>Project details coming soon.</h3>
                <p>
                  Description, technical approach and key
                  engineering decisions will be added here.
                </p>
              </div>
              <div className="project-card-bottom">
                <span>BACKEND / SOFTWARE</span>
                <span>↗</span>
              </div>
            </article>
          </div>
        </div>
      </section>


      
      {/* SKILLS */}
      <section className="content-section skills-section" id="skills">
        <div className="section-index">
          <span>03 / TECHNICAL INVENTORY</span>
          <span className="about-index-note">TOOLS & TECHNOLOGIES</span>
        </div>
              
        <div className="section-content skills-content">
          <span className="eyebrow">THE ENGINEERING TOOLKIT</span>
              
          <h2>
            Tools of
            <br />
            <span className="about-accent">the trade.</span>
          </h2>
              
          <p className="skills-intro">
            A growing collection of technologies, tools
            and concepts used to design and build software.
          </p>
              
          <div className="skills-dashboard">
            <div className="skills-dashboard-header">
              <span>TECHNICAL PROFILE</span>
              <span>INDEX / 001</span>
            </div>
              
            <div className="skill-row">
              <span className="skill-number">01</span>
              <div>
                <span className="skill-category">LANGUAGES</span>
                <p>Technologies to be added</p>
              </div>
              <span className="skill-arrow">↗</span>
            </div>
              
            <div className="skill-row">
              <span className="skill-number">02</span>
              <div>
                <span className="skill-category">BACKEND DEVELOPMENT</span>
                <p>Technologies to be added</p>
              </div>
              <span className="skill-arrow">↗</span>
            </div>
              
            <div className="skill-row">
              <span className="skill-number">03</span>
              <div>
                <span className="skill-category">DATABASES</span>
                <p>Technologies to be added</p>
              </div>
              <span className="skill-arrow">↗</span>
            </div>
              
            <div className="skill-row">
              <span className="skill-number">04</span>
              <div>
                <span className="skill-category">INFRASTRUCTURE & TOOLS</span>
                <p>Technologies to be added</p>
              </div>
              <span className="skill-arrow">↗</span>
            </div>
              
            <div className="skill-row">
              <span className="skill-number">05</span>
              <div>
                <span className="skill-category">ENGINEERING CONCEPTS</span>
                <p>Concepts to be added</p>
              </div>
              <span className="skill-arrow">↗</span>
            </div>
              
            <div className="skills-dashboard-footer">
              <span>PROFILE STATUS</span>
              <strong>CONTINUOUSLY EVOLVING</strong>
            </div>
          </div>
        </div>
      </section>
              

      {/* EXPERIENCE */}
      <section className="content-section experience-section" id="experience">
        <div className="section-index">
          <span>04 / EXPERIENCE</span>
          <span className="about-index-note">PROFESSIONAL HISTORY</span>
        </div>

        <div className="section-content experience-content">
          <span className="eyebrow">THE PATH SO FAR</span>

          <h2>
            Where I've
            <br />
            <span className="about-accent">worked.</span>
          </h2>

          <p className="experience-intro">
            A record of professional experiences, responsibilities and lessons
            along the way.
          </p>

          <div className="experience-timeline">
            <article className="experience-entry">
              <div className="experience-marker">
                <span>01</span>
              </div>

              <div className="experience-entry-content">
                <div className="experience-entry-top">
                  <span>EXPERIENCE / 001</span>
                  <span>DATES TO BE ADDED</span>
                </div>

                <h3>Role title to be added</h3>

                <span className="experience-organisation">
                  Organisation to be added
                </span>

                <p>
                  A description of the role, responsibilities, contributions
                  and experience gained.
                </p>

                <div className="experience-tags">
                  <span>TECHNOLOGIES</span>
                  <span>TO BE ADDED</span>
                </div>
              </div>
            </article>

            <article className="experience-entry">
              <div className="experience-marker">
                <span>02</span>
              </div>

              <div className="experience-entry-content">
                <div className="experience-entry-top">
                  <span>EXPERIENCE / 002</span>
                  <span>DATES TO BE ADDED</span>
                </div>

                <h3>Role title to be added</h3>

                <span className="experience-organisation">
                  Organisation to be added
                </span>

                <p>
                  A description of the role, responsibilities, contributions
                  and experience gained.
                </p>

                <div className="experience-tags">
                  <span>TECHNOLOGIES</span>
                  <span>TO BE ADDED</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* NOTES */}
      <section className="content-section notes-section" id="notes">
        <div className="section-index">
          <span>05 / NOTES</span>
          <span className="about-index-note">THOUGHTS & OBSERVATIONS</span>
        </div>
              
        <div className="section-content notes-content">
          <span className="eyebrow">THE NOTEBOOK</span>
              
          <h2>
            Thoughts in
            <br />
            <span className="about-accent">progress.</span>
          </h2>
              
          <p className="notes-intro">
            Technical discoveries, lessons from building software, and ideas
            worth exploring.
          </p>
              
          <div className="notes-list">
            <article className="note-entry">
              <div className="note-number">01</div>
              <div className="note-details">
                <span>ARTICLE / TO BE ADDED</span>
                <h3>First note coming soon</h3>
                <p>A short description of the article or technical insight.</p>
              </div>
              <span className="note-arrow">↗</span>
            </article>
              
            <article className="note-entry">
              <div className="note-number">02</div>
              <div className="note-details">
                <span>ARTICLE / TO BE ADDED</span>
                <h3>Second note coming soon</h3>
                <p>A short description of the article or technical insight.</p>
              </div>
              <span className="note-arrow">↗</span>
            </article>
              
            <article className="note-entry">
              <div className="note-number">03</div>
              <div className="note-details">
                <span>ARTICLE / TO BE ADDED</span>
                <h3>Third note coming soon</h3>
                <p>A short description of the article or technical insight.</p>
              </div>
              <span className="note-arrow">↗</span>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="content-section contact-section" id="contact">
        <div className="section-index">
          <span>06 / CONTACT</span>
          <span className="about-index-note">START A CONVERSATION</span>
        </div>

        <div className="section-content contact-content">
          <span className="eyebrow">THE NEXT CHAPTER</span>

          <h2>
            Have something
            <br />
            <span className="about-accent">in mind?</span>
          </h2>

          <p className="contact-intro">
            Whether it's an interesting project, an opportunity or simply a
            conversation about technology, I'd be glad to hear from you.
          </p>

          <div className="contact-main">
            <span>GET IN TOUCH</span>
            <p>Email address to be added</p>
          </div>

          <div className="contact-links">
            <div>
              <span>01 / GITHUB</span>
              <p>Profile link to be added</p>
            </div>

            <div>
              <span>02 / LINKEDIN</span>
              <p>Profile link to be added</p>
            </div>

            <div>
              <span>03 / OTHER</span>
              <p>Link to be added</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>SANJA<span>.</span></h2>
            <p>BUILT WITH CURIOSITY. DESIGNED WITH INTENTION.</p>
          </div>

          <a href="#top" className="back-to-top">
            BACK TO TOP <span>↑</span>
          </a>
        </div>

        <div className="footer-middle">
          <span>THANK YOU FOR STOPPING BY.</span>
          <span>END OF TRANSMISSION — 001</span>
        </div>

        <div className="footer-bottom">
          <span>© 2026 SANJA.</span>
          <span>DESIGNED & BUILT WITH CARE</span>
          <span>KENYA</span>
        </div>
      </footer>
    </main>
  );
}
