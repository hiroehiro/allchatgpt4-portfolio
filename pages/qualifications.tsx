import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Header from "../components/Header";
import { Box } from "@mui/system";
import { EmojiEvents, GitHub, VerifiedUser } from "@mui/icons-material";
import { useState } from "react";

const Qualifications = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Paper elevation={1} sx={{ padding: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            資格
          </Typography>
          <List>
            {[
              {
                name: "AWS認定ソリューションアーキテクト – アソシエイト",
                date: "2022年1月",
              },
              {
                name: "Google Cloud Professional Cloud Architect",
                date: "2022年6月",
              },
            ].map((certification) => (
              <ListItem key={certification.name}>
                <ListItemAvatar>
                  <Avatar>
                    <VerifiedUser />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={certification.name}
                  secondary={certification.date}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
        <br />
        <Paper elevation={2} sx={{ padding: 4 }}>
          {/* <Divider /> */}
          {/* 6. 受賞歴・実績 */}
          <Box my={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              受賞歴・実績
            </Typography>
            <List>
              {[
                {
                  name: "第1回プログラミングコンテスト 優勝",
                  date: "2021年4月",
                },
                {
                  name: "第2回プログラミングコンテスト 準優勝",
                  date: "2021年10月",
                },
              ].map((award) => (
                <ListItem key={award.name}>
                  <ListItemAvatar>
                    <Avatar>
                      <EmojiEvents />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={award.name} secondary={award.date} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Qualifications;
