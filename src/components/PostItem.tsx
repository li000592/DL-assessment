import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"
import Avatar from "@material-ui/core/Avatar"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"

import { fullNameToNameInitials, randomColourString, timeConverter } from "../utils/convertTools"
import { useStyles } from "../styles/post-style"
import { Post } from "../interface"
import PostModal from "./PostModal"

export default function PostItem(props: { post: Post }) {
  const [open, setOpen] = React.useState(false)
  const { post } = props
  const classes = useStyles()
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const description = post.description.length > 110 ? post.description.slice(0, 110) + "..." : post.description
  const avatarColourString = randomColourString()
  return (
    <React.Fragment>
      <ListSubheader className={classes.subheader}>{timeConverter(post.createAt.seconds)}</ListSubheader>
      <ListItem button onClick={handleOpen}>
        <ListItemAvatar>
          <Avatar alt='Profile Picture' style={{ backgroundColor: avatarColourString }}>
            {fullNameToNameInitials(post.username)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={post.name} secondary={description} />
      </ListItem>
      ]
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <PostModal post={post} avatarColourString={avatarColourString} />
      </Modal>
    </React.Fragment>
  )
}
