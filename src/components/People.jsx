import React from "react";
import data from "../data";

const People = () => {
  const [details, setDetails] = React.useState(data);
  const handleReset = () => {
    setDetails([]);
  };
  return (
    <section style={{ maxWidth: "400px", padding: "20px" }}>
      <h3 style={{ marginBottom: "30px" }}>{details.length} Birthdays Today</h3>
      <article>
        {details.map((prop) => {
          const { id, name, age, image } = prop;
          return (
            <div key={id}>
              <img
                src={image}
                alt={name}
                style={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              ></img>
              <div style={{ display: "inline-block" }}>
                <h4 style={{ marginBottom: "20px" }}>{name}</h4>
                <p style={{ marginBottom: "18px" }}>{age}</p>
              </div>
            </div>
          );
        })}
      </article>
      <button onClick={handleReset}>Clear All</button>
    </section>
  );
};

export default People;
