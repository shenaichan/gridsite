import css from "./base.module.css";
// import Project from "./_project";

const first = "✸SHENAI".split("");
const last = "CHAN".split("");
const projects = "PROJECTS→".split("");
const projectsLeft = "←PROJECTS".split("").reverse();

export default function Home() {
  return (
    <div id={css.infra}>
      <div id={css.littleInfra}>
        <div className={css.stripe2}></div>
        <div className={css.star}>✸</div>
        <div
          style={{
            gridRow: "3",
            gridColumn: "2",
            color: "white",
          }}
          className={css.myName}
        >
          <p>陈</p>
        </div>
        <div
          style={{
            gridRow: "5",
            gridColumn: "2",
            top: "10px",
          }}
          className={css.myName}
        >
          <p>颖</p>
        </div>
        <div
          style={{
            gridRow: "6",
            gridColumn: "2",
            top: "30px",
          }}
          className={css.myName}
        >
          <p>恩</p>
        </div>

        {first.map((letter, idx) => (
          <div
            key={`${letter}${idx}`}
            style={{ gridRow: `${idx + 1}`, gridColumn: "5", left: "-5px" }}
            className={css.myName}
          >
            <p>{letter}</p>
          </div>
        ))}
        {last.map((letter, idx) => (
          <div
            key={`${letter}${idx}`}
            style={{ gridRow: `${idx + 6}`, gridColumn: "4", right: "-5px" }}
            className={`${css.myName} ${css.red}`}
          >
            <p>{letter}</p>
          </div>
        ))}
        <div className={css.tilt}></div>
        <div className={css.occupation}>
          <div>
            <p>is a</p>
            <p>PROGRAMMER</p>
            <p>
              <span style={{ color: "var(--emph-text-color)" }}>&</span>
              DESIGNER
            </p>
            <p>
              <span style={{ color: "var(--emph-text-color)" }}>&</span>
              ARTIST...
            </p>
          </div>
        </div>
      </div>
      <div className={css.stripe}></div>
      <div style={{ gridRow: "2", left: "50px" }} className={css.paragraph}>
        {/* <p>
          ... living across <span className={css.bold}>Austin, TX</span>, and
          the <span className={css.bold}>San Francisco Bay Area</span>.
        </p>
        <br />
        <p>
          They studied{" "}
          <span className={css.bold}>Human - Computer Interaction</span> and{" "}
          <span className={css.bold}>Computer Engineering</span> at{" "}
          <span className={css.bold}>Carnegie Mellon</span>, but these days they
          mostly work on the web.
        </p> */}
        <p>
          who loves working <span className={css.bold}>across diciplines</span>{" "}
          and with <span className={css.bold}>diverse groups of people</span>.
        </p>
        <br />
        <p>
          who believes <span className={css.bold}>writing is thinking</span>,
          and is always seeking to be a better communicator and a better{" "}
          <span className={css.bold}>student of the world</span>.
        </p>
        <br />
      </div>
      <div style={{ gridRow: "3", left: "100px" }} className={css.paragraph}>
        {/* <p>
          In Fall 2024, they participated in a programming retreat at the{" "}
          <a href="https://www.recurse.com/">Recurse Center</a>, where they
          developed lots of fun web and hardware projects.
        </p>
        <br /> */}
        {/* <p>... who is currently...</p> */}
        <p>
          who studied{" "}
          <span className={css.bold}>human-computer interaction</span> and{" "}
          <span className={css.bold}>computer engineering</span> at{" "}
          <span className={css.bold}>Carnegie Mellon</span>, and participated in
          a selective programming retreat at the{" "}
          <a href="https://www.recurse.com/">Recurse Center</a>.
        </p>
        <br />
        <p className={css.bold} style={{ fontSize: "22px" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;who is currently...
        </p>
      </div>
      <div className={css.desperation}>
        SEEKING NEW GRAD SOFTWARE ENGINEERING WORK!
      </div>
      <div
        style={{
          gridArea: "-2 / 2 / -3 / -2 ",
          // border: "1px solid black",
          position: "relative",
          right: "20px",
          // top: "30px",
          bottom: "70px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          fontSize: "100px",
          lineHeight: "1",
          fontVariationSettings: "'wdth' 70",
          fontWeight: "600",
          color: "var(--emph-text-color)",
          fontFamily: "var(--font-martian)",
        }}
      >
        {"{</>}"}
      </div>
      {/* <div className={css.projects}>
        <p style={{ fontSize: "100px" }}>✸</p>
        <p>PROJECTS</p>
      </div> */}
      <div id={css.bottomInfra}>
        {projectsLeft.map((letter, idx) => (
          <div
            key={`${letter}${idx}`}
            style={{
              gridRow: `${idx + 1}`,
              gridColumn: "2",
              transform: "rotate(-90deg)",
              right: idx === 8 ? "12px" : "auto",
              fontSize: idx === 8 ? "85px" : "auto",
              color: idx === 8 ? "#FF0000" : "auto",
            }}
            className={css.projects}
          >
            <p>{letter}</p>
          </div>
        ))}
        {projects.map((letter, idx) => (
          <div
            key={`${letter}${idx}`}
            style={{
              gridRow: `${idx + 1}`,
              gridColumn: "4",
              transform: "rotate(90deg)",
              left: idx === 8 ? "12px" : "auto",
              fontSize: idx === 8 ? "85px" : "auto",
              color: idx === 8 ? "#FF0000" : "auto",
            }}
            className={css.projects}
          >
            <p>{letter}</p>
          </div>
        ))}
        <div className={css.diamondContainer}>
          <div className={css.skillDiamond}></div>
        </div>
        <div className={css.skilledAcross}>
          <div style={{ fontSize: "22px", whiteSpace: "pre-line" }}>
            {/* <p>SKILLED ACROSS</p>
            <p>FULLSTACK DEVELOPMENT,</p>
            <p>UI/UX/USER RESEARCH, </p>
            <p>& EMBEDDED SYSTEMS.</p> */}
            <p>
              {
                "I believe in\n software as an expression of loving attention: it\
              takes a great deal of patience and care to build systems attuned\
              \nto human needs and desires."
              }
            </p>
          </div>
        </div>
        <div style={{ gridArea: "-3 / 2 / -2 / -3" }}>
          <div className={css.paragraph}>
            <br />
            <p style={{ fontSize: "24px", fontWeight: "500" }}>
              NOTES FROM AFAR
            </p>
            <p style={{ fontSize: "18px", lineHeight: "2" }}>
              <a href="">live site</a> {"//"}{" "}
              <a href="">code and documentation</a>
            </p>
            <p
              style={{ fontSize: "16px", color: "#666294", fontWeight: "275" }}
            >
              Python + Django + Django Ninja + TypeScript + React + HTML + CSS +
              MapBox API + OpenAI API + PostgreSQL + Render
            </p>
            <br />
            <p style={{ fontSize: "16px", fontWeight: "275" }}>
              Designed, programmed, user tested, and deployed fully-functional
              web application where users can leave anonymous notes about their
              long distance relationships.
            </p>
            <br />
            <p style={{ fontSize: "16px", fontWeight: "275" }}>
              <span style={{ fontWeight: "500", color: "red" }}>Why?</span> I
              {"'"}m interested in adding avenues of serendipity and caretaking
              to relationships that, for one reason or another, might not have
              the privilege of physical presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
