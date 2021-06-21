import React from "react"

import InputBase from "@material-ui/core/InputBase"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import { BrightnessLow, BrightnessHigh } from "@material-ui/icons"

import { useStyles } from "../styles/header-style"

export default function Header(props: {
  setTheme: React.Dispatch<React.SetStateAction<boolean>>
  theme: boolean
  setQuery: React.Dispatch<React.SetStateAction<string>>
}) {
  const { setTheme, theme, setQuery } = props
  const queryRef = React.useRef<any>(null)
  const classes = useStyles()
  const toggoleThemeHander = () => {
    setTheme((theme) => !theme)
  }
  const queryOnChangedHandler = () => {
    const value = `${queryRef.current.value}`
    setQuery(value)
  }
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              inputRef={queryRef}
              onChange={queryOnChangedHandler}
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton edge='end' color='inherit' onClick={toggoleThemeHander}>
            {theme ? <BrightnessHigh /> : <BrightnessLow />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
