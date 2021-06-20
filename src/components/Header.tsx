import React from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import { BrightnessLow, BrightnessHigh } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: "auto",
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: "absolute",
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: "0 auto",
    },
  })
)

export default function Header(props: { setTheme: any; theme: boolean }) {
  const classes = useStyles()
  const toggoleThemeHander = () => {
    props.setTheme((theme: any) => !theme)
  }
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow} />
          <IconButton color='inherit'>
            <SearchIcon />
          </IconButton>
          <IconButton edge='end' color='inherit' onClick={toggoleThemeHander}>
            {props.theme ? <BrightnessHigh /> : <BrightnessLow />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
