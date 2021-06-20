import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
  })
)
