import { CheckCircle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  console.log(relatedVideos);
  const { id } = useParams();
  console.log(videoDetail);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(
      (data) => setVideoDetail(data.items[0])
    );
    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    ).then((data) => setRelatedVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return 'Loading...!';

  const { snippet, statistics } = videoDetail;
  console.log(statistics);
  return (
    <Box minHeight={'95vh'}>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box
            sx={{ width: '100%', position: 'sticky', top: '86px' }}
          >
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography
              variant="h5"
              color={'#FFF'}
              fontWeight={'bold'}
              p={2}
            >
              {snippet.title}
            </Typography>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${snippet.channelId}`}>
                <Typography
                  color={'#fff'}
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                >
                  {snippet.channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: '12px',
                      color: 'gray',
                      ml: '5px',
                    }}
                  />
                </Typography>
              </Link>
              <Stack
                direction={'row'}
                gap={'20px'}
                alignItems={'center'}
              >
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics.viewCount).toLocaleString()}{' '}
                  Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics.likeCount).toLocaleString()}{' '}
                  Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Videos videos={relatedVideos} direction={'column'} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
