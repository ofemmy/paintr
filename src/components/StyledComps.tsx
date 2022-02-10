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
  padding: "5px",

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
  display: "flex",
  borderRadius: "5px",
  //border: `1px solid ${orange.orange11}`,
  marginRight: "50px",
  overflow: "hidden",
  //padding: "5px 10px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
});
export const Tab = styled("button", {
  display: "flex",
  flexDirection: "column",
  //padding: "10px",
  minWidth: "80px",
  border: 0,
  fontSize: "13px",
  color: orange.orange9,
  justifyContent: "center",
  alignItems: "center",
  // background: "white",
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
