import React from "react";
import { active } from "./Inform";
import "./Workgroupactivity.css";
function Workgroupactivity() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "rgb(253, 253, 253)",
        minHeight: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "2vw 0 ",
        }}
      >
        <h3
          style={{
            borderWidth: "2px",
            padding: "1vw",
            fontWeight: "bold",
            margin: 0,
            // borderStyle: "solid",

            // boxShadow: " rgb(118, 189, 213) 2px 1px 3px 2px",

            // borderImage:
            //   "linear-gradient(rgb(35, 240, 199), rgb(16, 137, 152), rgb(16, 249, 255)) 20 / 1 / 0 stretch",
          }}
        >
          工作小組
        </h3>
        <hr
          style={{
            width: "20%",
            marginBottom: "2rem",
            size: "10",
            color: "rgb(118, 189, 213)",
            border: "2px solid orange",
          }}
        />
      </div>
      {active.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div key={item} className="ActiveBlock">
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                  marginBottom: "2vw",
                }}
              >
                {" "}
                {item.title}
              </h3>
              <div style={{ display: "flex", width: "100%" }}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Workgroupactivity;
