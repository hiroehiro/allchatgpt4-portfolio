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

const Timelines = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        {/* タイムラインセクション */}
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            タイムライン
          </Typography>
          <Timeline position="alternate">
            {/* タイムラインの項目を作成 */}
            {[
              {
                date: "1995年",
                title: "生まれ",
                content: "東京都で生まれる。",
              },
              {
                date: "2013年",
                title: "プログラミング開始",
                content: "高校でプログラミングを始める。",
              },
              {
                date: "2017年",
                title: "大学入学",
                content: "東京の大学に入学し、コンピュータサイエンスを学ぶ。",
              },
              {
                date: "2021年",
                title: "資格取得",
                content:
                  "AWS認定ソリューションアーキテクト – アソシエイトを取得。",
              },
              {
                date: "2022年",
                title: "実績",
                content: "第1回プログラミングコンテストで優勝。",
              },
            ].map((event, index) => (
              <AnimatedTimelineItem key={event.title} delay={index * 100}>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="text.secondary">
                      {event.date}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" component="h3">
                      {event.title}
                    </Typography>
                    <Typography>{event.content}</Typography>
                  </TimelineContent>
                </TimelineItem>
              </AnimatedTimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </>
  );
};

export default Timelines;
