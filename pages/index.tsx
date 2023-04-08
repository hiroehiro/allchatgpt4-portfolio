import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Chip,
  Avatar,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardMedia,
  CardActions,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Rating } from "@mui/lab";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  TextField,
  Button,
} from "@mui/material";
import { VerifiedUser, EmojiEvents } from "@mui/icons-material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "@react-spring/web";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  // Button,
} from "@mui/material";
import Header from "../components/Header";

// タイムライン項目のアニメーションを担当するコンポーネント
const AnimatedTimelineItem = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(100px)",
    delay: delay,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const Home = () => {
  // ダイアログの状態を管理するuseStateフック
  const [dialog, setDialog] = useState({ open: false, title: "", content: "" });

  // ダイアログを開く関数
  const handleClickOpen = (title, content) => {
    setDialog({ open: true, title, content });
  };

  // ダイアログを閉じる関数
  const handleClose = () => {
    setDialog({ ...dialog, open: false });
  };
  return (
    <>
      <Header />

      <div>
        <Head>
          <title>山田太郎のポートフォリオ</title>
          <meta
            name="description"
            content="山田太郎のポートフォリオサイトです"
          />
        </Head>
        <Box bgcolor="primary.main" color="primary.contrastText" py={6}>
          <Container maxWidth="md">
            <Grid container alignItems="center">
              <Grid item xs={12} sm={4} md={3}>
                <Avatar
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "200px",
                    maxHeight: "200px",
                  }}
                  alt="山田太郎"
                  src="/profile.png"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <Typography variant="h3" component="h1" gutterBottom>
                  山田太郎
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Next.jsとTypeScriptを使ったWebアプリケーション開発のエンジニア
                </Typography>
                <Box display="flex" alignItems="center">
                  <IconButton
                    color="secondary"
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    href="https://twitter.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container maxWidth="md">
          {/* 2. スキルセット */}
          <Box my={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              スキルセット
            </Typography>
            <Grid container spacing={2}>
              {/* スキルの一覧を表示 */}
              {[
                { name: "Next.js", rating: 4 },
                { name: "TypeScript", rating: 5 },
                { name: "React", rating: 4 },
                { name: "Redux", rating: 3 },
                { name: "JavaScript", rating: 5 },
                { name: "HTML", rating: 5 },
                { name: "CSS", rating: 4 },
                { name: "Firebase", rating: 3 },
                { name: "MongoDB", rating: 2 },
                { name: "Git", rating: 4 },
                { name: "Webpack", rating: 3 },
              ].map((skill) => (
                <Grid item xs={12} sm={6} md={4} key={skill.name}>
                  <Box display="flex" alignItems="center">
                    <Chip label={skill.name} />
                    <Box ml={2}>
                      <Rating value={skill.rating} readOnly />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* 以下のセクションも同様にデザインを調整していきます。 */}
          {/* 3. 実績・プロジェクト */}
          <Box my={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              実績・プロジェクト
            </Typography>
            <Grid container spacing={4}>
              {/* プロジェクトのカードを表示 */}
              {/* {[
              {
                title: "プロジェクト1",
                description: "プロジェクト1の説明です。",
              },
              {
                title: "プロジェクト2",
                description: "プロジェクト2の説明です。",
              },
              {
                title: "プロジェクト3",
                description: "プロジェクト3の説明です。",
              },
            ].map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <Card>
                  <CardHeader title={project.title} />
                  <CardContent>
                    <Typography>{project.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid> */}
              {[
                {
                  title: "プロジェクト1",
                  description: "プロジェクト1の説明です。",
                  imageUrl: "openai.jpg",
                  shortDescription: "aaa",
                  githubUrl:
                    "https://github.com/hiroehiro/allchatgpt4-portfolio",
                },
                {
                  title: "プロジェクト2",
                  description: "プロジェクト2の説明です。",
                  imageUrl: "pexels.jpg",
                  shortDescription: "bbb",
                  githubUrl:
                    "https://github.com/hiroehiro/allchatgpt4-portfolio",
                },
                {
                  title: "プロジェクト3",
                  description: "プロジェクト3の説明です。",
                  imageUrl: "code.jpg",
                  shortDescription: "ccc",
                  githubUrl:
                    "https://github.com/hiroehiro/allchatgpt4-portfolio",
                },
              ].map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.title}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardActionArea
                      onClick={() =>
                        handleClickOpen(project.title, project.description)
                      }
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.imageUrl}
                        alt={project.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          component="p"
                        >
                          {project.shortDescription}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <IconButton
                        color="secondary"
                        href="https://github.com/username"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHub />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        {/* // Homeコンポーネントの最後にダイアログコンポーネントを追加 */}
        <Dialog open={dialog.open} onClose={handleClose}>
          <DialogTitle>{dialog.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{dialog.content}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              閉じる
            </Button>
          </DialogActions>
        </Dialog>
        ;
      </div>
    </>
  );
};

export default Home;
