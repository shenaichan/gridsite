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
              ARTIST
            </p>
          </div>
        </div>
      </div>
      <div className={css.stripe}></div>
      <div style={{ gridRow: "2", left: "50px" }} className={css.paragraph}>
        <p>
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
        </p>
      </div>
      <div style={{ gridRow: "3", left: "100px" }} className={css.paragraph}>
        <p>
          In Fall 2024, they participated in a programming retreat at the{" "}
          <a href="">Recurse Center</a>, where they developed lots of fun web
          and hardware projects.
        </p>
      </div>
      <div className={css.desperation}>
        SEEKING FULLTIME SOFTWARE ENGINEERING WORK!
      </div>
      <div
        style={{
          gridArea: "-2 / 2 / -3 / -2 ",
          // border: "1px solid black",
          position: "relative",
          right: "20px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          fontSize: "300px",
          lineHeight: "1",
          color: "var(--soft-red-color)",
          fontFamily: "var(--font-martian)",
        }}
      >
        ✸
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
          <div style={{ fontWeight: "500", fontSize: "24px" }}>
            <p>SKILLED ACROSS</p>
            <p>FULLSTACK DEVELOPMENT,</p>
            <p>UI/UX/USER RESEARCH, </p>
            <p>& EMBEDDED SYSTEMS.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
