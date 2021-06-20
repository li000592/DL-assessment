import React from "react"

import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import { BrightnessLow, BrightnessHigh } from "@material-ui/icons"

import { useStyles } from "../styles/header-style"

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
