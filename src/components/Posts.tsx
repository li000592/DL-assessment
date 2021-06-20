import React from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"
import Avatar from "@material-ui/core/Avatar"

import { fullNameToNameInitials, randomColourString, timeConverter } from "../utils/convertTools"

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
interface Post {
  name: string
  description: string
  createAt: {
    seconds: number
  }
  rating: number
}
export default function Posts(props: { reviewData: any }) {
  console.log(props.reviewData)

  const classes = useStyles()

  return (
    <Paper square className={classes.paper}>
      <Typography className={classes.text} variant='h5' gutterBottom>
        Posts
      </Typography>
      <List className={classes.list}>
        {props.reviewData.map((post: Post, index: number) => (
          <React.Fragment key={index}>
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
        ))}
      </List>
    </Paper>
  )
}

// {post.createAt.seconds === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
// {index === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
