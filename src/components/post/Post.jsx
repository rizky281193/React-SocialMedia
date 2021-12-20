import { Fragment, useEffect, useState } from 'react';
import "./post.css";
import axios from 'axios';
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Modal, Typography } from '@material-ui/core';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Post({ post }) {
  const [user, setUser] = useState({})
  const [comment, setComment] = useState([])
  const [detailComment, setDetailComment] = useState([])
  const baseURL = 'https://jsonplaceholder.typicode.com'
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${baseURL}/users/${post.userId}`)
      const resComment = await axios.get(`${baseURL}/posts/${post.userId}/comments`)
      setUser(res.data)
      setComment(resComment.data)
    }
    fetchUser()
  }, [post.userId])

  const handleOpen = (val) => {
    setOpen(true)
    const res = axios.get(`${baseURL}/posts/${val}/comments`)
    setDetailComment(res)
    console.log('val', detailComment)
  };
  const handleClose = () => setOpen(false);

  // console.log('post', post)
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <span className="postUsername">
              {user.username}
            </span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.body}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomRight">
            <span className="postCommentText" onClick={() => handleOpen(user.id)}>{comment.length} comments</span>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className='commentBox' sx={style}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                        <Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ali Connors
                          </Typography>
                          {" — I'll be in your neighborhood doing errands this…"}
                        </Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
