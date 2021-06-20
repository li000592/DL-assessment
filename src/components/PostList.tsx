import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"
import Avatar from "@material-ui/core/Avatar"

import { fullNameToNameInitials, randomColourString, timeConverter } from "../utils/convertTools"
import { useStyles } from "../styles/post-style"
import PostItem from "./PostItem"
import { Post } from "../interface"

export default function Posts(props: { reviewData: Array<Post> }) {
  const classes = useStyles()

  return (
    <Paper square className={classes.paper}>
      <Typography className={classes.text} variant='h5' gutterBottom>
        Posts
      </Typography>
      <List className={classes.list}>
        {props.reviewData.map((post: Post, index: number) => (
          <PostItem post={post} key={index} />
        ))}
      </List>
    </Paper>
  )
}

// {post.createAt.seconds === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
// {index === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
