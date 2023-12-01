import React, { useState, useEffect } from 'react';

import {
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Divider,
} from '@mui/material';
import { Avatar } from '@material-tailwind/react';
import avatar from '../../assets/avatar.jpg';
import Card1 from '../../assets/Card1.jpg';
import Card2 from '../../assets/Card2.jpg';
import Card3 from '../../assets/Card3.jpg';
import Card4 from '../../assets/Card4.jpg';
import Card5 from '../../assets/Card5.jpg';
import { getPosts, postContents } from '../../service/auth.service';
import { AvatarGenerator } from 'random-avatar-generator';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const generator = new AvatarGenerator();

  const handleShare = async () => {
    await postContents({ content });
    setContent('');
    getAllPosts();
  };

  const getAllPosts = async () => {
    const { data } = await getPosts();
    setPosts(data);
    console.log(data, 'getAllPosts');
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mt: 5,
          gap: 4,
          width: '85%',
          mx: 'auto',
        }}
      >
        <Grid container spacing={2}>
          {[Card1, Card2, Card3, Card4, Card5, Card1].map((card, index) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={2} key={index}>
                <Card
                  sx={{
                    height: '300px',
                    borderRadius: '10px',
                    backgroundImage: `url(${card})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}
                >
                  <CardContent
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      opacity: '70%',
                      color: 'white',
                      padding: '10px',
                    }}
                  >
                    Kamruddin
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Card
          sx={{
            borderRadius: '60px',
            width: '60%',
            mx: 'auto',
            padding: '10px',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItem: 'center',
            }}
          >
            <TextField
              placeholder="Whats On Your Mind Today"
              label="Post"
              fullWidth
              value={content}
              onChange={(e) => setContent(e.target.value)}
              InputProps={{
                style: {
                  borderRadius: 30,
                },
              }}
            ></TextField>
            <Button onClick={handleShare}>Share</Button>
          </CardContent>
        </Card>

        <Grid container spacing={2} sx={{ width: '60%', mx: 'auto' }}>
          {posts?.map((element, index) => {
            return (
              <Grid item xs={12} key={index}>
                <Card
                  sx={{
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'left',
                    textAlign: 'left',
                    gap: 3,
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'left',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Avatar
                      src={generator.generateRandomAvatar()}
                      style={{
                        borderRadius: '50%',
                        width: '40px',
                      }}
                      alt="avatar"
                    />{' '}
                    <Typography variant="h6">
                      {element?.userId?.firstName}
                    </Typography>
                  </Box>
                  <Box mt={2}>{element?.content}</Box>
                  <Divider />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
