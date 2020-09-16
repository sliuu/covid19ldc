import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/common/components/tabPanelStyle.js";

const useStyles = makeStyles(styles);
export default function TabPanel(props) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.box} p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}
