import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Hidden,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  const navigationLinks = (
    <>
      <Button href="/" color="inherit">
        ホーム
      </Button>
      <Button href="/qualifications" color="inherit">
        資格・実績
      </Button>
      <Button href="/timeline" color="inherit">
        タイムライン
      </Button>
    </>
  );

  const drawerNavigationLinks = (
    <List>
      <ListItem>
        <Button href="/" color="inherit">
          ホーム
        </Button>
      </ListItem>
      <ListItem>
        <Button href="/qualifications" color="inherit">
          資格・実績
        </Button>
      </ListItem>
      <ListItem>
        <Button href="/timeline" color="inherit">
          タイムライン
        </Button>
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          山田太郎のポートフォリオ
        </Typography>
        <Hidden mdDown>{navigationLinks}</Hidden>
        <Hidden mdUp>
          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerNavigationLinks}
      </Drawer>
    </AppBar>
  );
};

export default Header;
