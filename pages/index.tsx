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
                src="/profile.jpg"
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
              "Next.js",
              "TypeScript",
              "React",
              "Redux",
              "JavaScript",
              "HTML",
              "CSS",
              "Firebase",
              "MongoDB",
              "Git",
              "Webpack",
            ].map((skill) => (
              <Grid item key={skill}>
                <Chip label={skill} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider />

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
                rating: 4,
              },
              {
                title: "プロジェクト2",
                description: "プロジェクト2の説明です。",
                rating: 5,
              },
              {
                title: "プロジェクト3",
                description: "プロジェクト3の説明です。",
                rating: 3,
              },
            ].map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <Card>
                  <CardHeader title={project.title} />
                  <CardContent>
                    <Typography>{project.description}</Typography>
                    <Box mt={2}>
                      <Rating value={project.rating} readOnly />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
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
