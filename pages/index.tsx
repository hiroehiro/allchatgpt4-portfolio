import React from "react";
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

const Home = () => {
  return (
    <div>
      <Head>
        <title>山田太郎のポートフォリオ</title>
        <meta name="description" content="山田太郎のポートフォリオサイトです" />
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
            {[
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
          </Grid>
        </Box>

        {/* 5. 資格・認定 */}
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            資格・認定
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
        </Box>

        <Divider />

        {/* 6. 受賞歴・実績 */}
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            受賞歴・実績
          </Typography>
          <List>
            {[
              { name: "第1回プログラミングコンテスト 優勝", date: "2021年4月" },
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

        {/* 以下のセクションも同様にデザインを調整していきます。 */}
        {/* 4. コードサンプル */}
        {/* 5. 資格・認定 */}
        {/* 6. 受賞歴・実績 */}
        {/* 7. ブログ・記事 */}
        {/* 8. 連絡先 */}
        {/* 9. デザイン・ユーザビリティ */}
        {/* 10. テスト・品質 */}
        {/* 11. ソフトスキル */}
      </Container>
    </div>
  );
};

export default Home;
