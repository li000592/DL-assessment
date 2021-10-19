import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"

import { useStyles } from "../styles/post-style"
import PostItem from "./PostItem"
import { Post } from "../interface"
import { queryFilter, sortArrayByCreateDay } from "../utils/convertTools"

export default function Posts(props: { reviewData: Array<Post>; query: string }) {
  const { reviewData, query } = props
  const classes = useStyles()

  return (
    <Paper square className={classes.paper}>
      <Typography className={classes.text} variant='h5' gutterBottom>
        Posts asdfasdfasdfsadfdsfasdfdsf
      </Typography>
      <List className={classes.list}>
        {sortArrayByCreateDay(queryFilter(reviewData, query)).map((post: Post, index: number) => (
          <PostItem post={post} key={index} />
        ))}
      </List>
    </Paper>
  )
}
