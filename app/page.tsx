import css from "./base.module.css";

const first = "✸SHENAI".split("");
const last = "CHAN".split("");

export default function Home() {
  return (
    <div id={css.infra}>
      <div id={css.littleInfra}>
        {first.map((letter, idx) => (
          <div
            key={`${letter}${idx}`}
            style={{ gridRow: `${idx + 1}`, gridColumn: "4" }}
            className={css.myName}
          >
            <p>{letter}</p>
          </div>
        ))}
        {last.map((letter, idx) => (
          <div
            key={`${letter}${idx}`}
            style={{ gridRow: `${idx + 6}`, gridColumn: "3" }}
            className={`${css.myName} ${css.red}`}
          >
            <p>{letter}</p>
          </div>
        ))}
        <div className={css.tilt}></div>
        <div className={css.occupation}>
          <p>is a</p>
          <p>PROGRAMMER</p>
          <p>
            <span style={{ color: "var(--neutral-color)" }}>&</span>DESIGNER
          </p>
          <p>
            <span style={{ color: "var(--neutral-color)" }}>&</span>ARTIST
          </p>
        </div>
      </div>
      <div className={css.stripe}></div>
      <div style={{ gridRow: "2", left: "50px" }} className={css.paragraph}>
        <p>... living across Austin, TX, and the San Francisco Bay Area.</p>
        <br />
        <p>
          They studied Human - Computer Interaction and Computer Engineering at
          Carnegie Mellon, but these days they mostly work on the web.
        </p>
      </div>
      <div style={{ gridRow: "3", left: "100px" }} className={css.paragraph}>
        <p>
          In Fall 2024, they participated in a programming retreat at the
          Recurse Center, where they developed lots of fun web and hardware
          projects.
        </p>
      </div>
    </div>
  );
}
