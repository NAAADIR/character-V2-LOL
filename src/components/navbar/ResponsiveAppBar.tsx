import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { BsGithub } from "react-icons/bs";
import { GiCharacter } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { ScrollTop } from "./ScrollTop";
const pages = ["champions"];

/**
 * @returns {JSX.Element}
 */

function ResponsiveAppBar() {
  const navegador = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#2d4780" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <GiCharacter />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                backgroundColor: "#18181a8d",
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{ "&:hover": { backgroundColor: "#b6b4b4" } }}
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    navegador(`/${page}`);
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontFamily: "bold-lol",
                      textTransform: "capitalize",
                      color: "#1a1a1adf",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              fontFamily: "regular-lol",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  navegador(`/${page}`);
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "bold-lol",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/NAAADIR"
          >
            <BsGithub size={30} fill="white" />
          </Link>
        </Toolbar>
      </Container>
      <ScrollTop children={undefined} />
    </AppBar>
  );
}
export default ResponsiveAppBar;
