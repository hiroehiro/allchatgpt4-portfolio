import { Box, Container, Typography } from "@mui/material";

function HomePage() {
  return (
    <Box sx={{ bgcolor: "primary.main", minHeight: "100vh", py: 4 }}>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h2" sx={{ color: "white", mt: 10, mb: 5 }}>
          私のポートフォリオサイトへようこそ
        </Typography>
        <Typography variant="h4" sx={{ color: "white", mb: 5 }}>
          自己紹介
        </Typography>
        <Typography variant="body1" sx={{ color: "white", mb: 5 }}>
          私は、Web開発に興味があり、特にNext.jsとTypescriptを使った開発に力を入れています。
        </Typography>
        <Typography variant="h4" sx={{ color: "white", mb: 5 }}>
          スキルセット
        </Typography>
        <Typography variant="body1" sx={{ color: "white", mb: 5 }}>
          ・Next.js
          <br />
          ・Typescript
          <br />
          ・React
          <br />
          ・MUI
          <br />
          ・Node.js
          <br />
          ・Express
          <br />
          ・PostgreSQL
          <br />
        </Typography>
        <Typography variant="h4" sx={{ color: "white", mb: 5 }}>
          職歴
        </Typography>
        <Typography variant="body1" sx={{ color: "white", mb: 5 }}>
          2018年〜現在
          <br />
          ソフトウェアエンジニア
          <br />
          株式会社テスト
          <br />
          Webアプリケーションの開発を担当しています。
        </Typography>
      </Container>
    </Box>
  );
}
export default HomePage;
