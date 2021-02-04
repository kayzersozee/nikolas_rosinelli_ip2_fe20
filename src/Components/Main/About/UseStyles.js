import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  AssignmentTurnedInRoundedIcon: {
    margin: "5px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    borderRadius: "2%",
  },
  img: {
    borderRadius: "2%",
    boxShadow: "1px 1px 5px 2px var(--light-gray)",
    width: "100%",
    marginTop: "30px",
  },
}));

export default UseStyles;