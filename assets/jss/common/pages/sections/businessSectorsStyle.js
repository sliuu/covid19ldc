import { title } from "assets/jss/common.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  x: {
    stroke: "gray !important",
  },
  '.tick': {
    fill: "black",
  },
};

export default productStyle;
