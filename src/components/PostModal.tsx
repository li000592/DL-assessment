import React from "react"
import Rating from "@material-ui/lab/Rating"
import Avatar from "@material-ui/core/Avatar"

import { fullNameToNameInitials } from "../utils/convertTools"
import { useStyles } from "../styles/modal-style"
import { Post } from "../interface"

export default function PostModal(props: { post: Post; avatarColourString: string }) {
  const { post, avatarColourString } = props
  const [modalStyle] = React.useState(getModalStyle)
  const classes = useStyles()
  return (
    <div style={getModalStyle()} className={classes.paper}>
      <div className={classes.modalHeader}>
        <h2 id='simple-modal-title'>{post.name}</h2>
        <Avatar alt='Profile Picture' style={{ backgroundColor: avatarColourString }}>
          {fullNameToNameInitials(post.username)}
        </Avatar>
      </div>

      <Rating readOnly defaultValue={post.rating} />
      <p>Author: {post.username}</p>
      <p id='simple-modal-description'>{post.description}</p>
    </div>
  )
}

function getModalStyle() {
  const top = 25
  const left = 25

  return {
    top: `${top}%`,
    margin: "auto",
    // left: `${left}%`,
    // transform: `translate(-${top}%, -${left}%)`,
  }
}
