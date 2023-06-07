import React from "react";
import { OpenSourceInform } from "../../../Pages/Successcase/Inform";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

function OpenSource() {
  return (
    <>
      {OpenSourceInform.map((item,i) => {
        return (
          <motion.div
          key={i}
            style={{ marginTop: "1rem" }}
            initial={{
              x: "-150%",
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{
              x: "0%",
            }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            {/* 上半 */}
            <a
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none ", color: "#0081a7" }}
            >
              <h3>{item.name}</h3>
            </a>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={4}>
                <div
                  style={{
                    width: "50%",
                    paddingBottom: "50%",
                    height: "0",
                    background: "#dcdcdc",
                    borderRadius: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <img
                    src={item.img}
                    style={{
                      marginTop: "10%",
                      marginLeft: "10%",
                      width: "80%",
                    }}
                  />
                </div>
              </Grid>
              <Grid item sx={12} sm={12} md={8}>
                {item.introduce}
              </Grid>
            </Grid>
            {/* 下半 */}
            <div style={{ whiteSpace: "pre-line" }}>{item.traks}</div>
            <hr />
          </motion.div>
        );
      })}
    </>
  );
}

export default OpenSource;
