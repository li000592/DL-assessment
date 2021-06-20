import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"
import Avatar from "@material-ui/core/Avatar"

import { fullNameToNameInitials, randomColourString, timeConverter } from "../utils/convertTools"
import { useStyles } from "../styles/post-style"
import { Post } from "../interface"

export default function PostItem(props: { post: Post }) {
  const { post } = props
  const classes = useStyles()

  return (
    <React.Fragment>
      <ListSubheader className={classes.subheader}>{timeConverter(post.createAt.seconds)}</ListSubheader>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt='Profile Picture' style={{ backgroundColor: randomColourString() }}>
            {fullNameToNameInitials(post.name)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={post.name} secondary={post.description} />
      </ListItem>
    </React.Fragment>
  )
}
