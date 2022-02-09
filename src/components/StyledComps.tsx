import { styled } from "@stitches/react";
import { gray, orange } from "@radix-ui/colors";
export const AppContainer = styled("div", {
  height: "100vh",
  width: "100%",
  display: "flex",
  fontFamily: "Open Sans",
});
export const NavbarWrapper = styled("div", {
  width: "100%",
  height: "70px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  //   "& >div": {
  //     width: "50%",
  //     backgroundColor: "white",
  //     borderRadius: "5px",
  //     boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px;",
  //   },
});
export const SidebarWrapper = styled("div", {
  height: "100%",
  width: "40%",
  borderRadius: "5px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
});
export const TabsWrapper = styled("div", {
  height: "100%",
  width: "50%",
  display: "flex",
  borderRadius: "5px",
  background: "orangered",
});
export const Tab = styled("button", {
  padding: "10px",
  width: "100%",
  border: 0,
  fontSize: "13px",
  color: orange.orange9,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  cursor: "pointer",
  "& svg": {
    height: "25px",
    width: "25px",
    marginRight: "5px",
  },
  "&:hover": {
    backgroundColor: orange.orange9,
    color: "white",
  },
});
export const Arena = styled("div", {
  width: "100%",
  height: "100%",
});
