import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modalHeader: {
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
)
