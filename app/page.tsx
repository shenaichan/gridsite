import css from "./base.module.css";

const first = "SHENAI".split("");
const last = "CHAN".split("");

export default function Home() {
  return (
    <div id={css.infra}>
      <div className={css.stripe}></div>
      {first.map((letter, idx) => (
        <div
          key={`${letter}${idx}`}
          style={{ gridRow: `${idx + 2}`, gridColumn: "4" }}
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
      <div
        style={{ gridRow: "-2", gridColumn: "2" }}
        className={css.occupation}
      >
        <p>is a</p>
        <p>PROGRAMMER</p>
        <p>&DESIGNER</p>
        <p>&ARTIST</p>
      </div>
    </div>
  );
}
