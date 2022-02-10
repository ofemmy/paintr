import { useState, useEffect, useRef } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "@stitches/react";
import { gray, orange } from "@radix-ui/colors";
import { usePhotos, useMounted } from "../utils";
import {
  TemplateIcon,
  PhotographIcon,
  PencilAltIcon,
  DownloadIcon,
} from "@heroicons/react/outline";
const StyledTabs = styled(Tabs.Root, {
  display: "flex",
  flexDirection: "column",
  height: "100%",
});
const StyledList = styled(Tabs.List, {
  flexShrink: 0,
  display: "flex",
  borderBottom: `1px solid ${orange.orange6}`,
});
const StyledTrigger = styled(Tabs.Trigger, {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: "10px",
  minWidth: "80px",
  border: 0,
  fontSize: "13px",
  color: orange.orange9,
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  cursor: "pointer",
  "& svg": {
    height: "25px",
    width: "25px",
    marginRight: "5px",
  },
  userSelect: "none",
  "&:hover": { color: orange.orange11 },
  '&[data-state="active"]': {
    backgroundColor: orange.orange9,
    color: "white",
  },
  "&:focus": {
    position: "relative",
    boxShadow: `0 0 0 1px ${orange.orange11}`,
  },
});
const PhotoWrapper = styled("div", {
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  padding: "30px 15px",
});
const PhotoTab = styled("div", {
  borderRadius: "10px",
  height: "250px",
  cursor: "pointer",
  //   background: "orangered",
  position: "relative",
  overflow: "hidden",
  "& img": {
    position: "absolute",
    top: "0px",
    bottom: "0px",
    display: "block",
  },
  "&:hover": {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
});
export const Menu = ({ store }: any) => {
  const [isPhoto, setIsPhoto] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState();
  const isFirstRender = useMounted();
  useEffect(() => {
    if (!isFirstRender) {
      const fetchPhotos = async () => {
        const data = await usePhotos();
        console.log(data[0]);
        setPhotos(data);
      };
      fetchPhotos();
    }
  }, [isPhoto, setIsPhoto]);
  const selectPhoto = (photo: any) => {
    store.activePage.addElement({
      type: "image",
      x: 0,
      y: 0,
      src: photo.urls.regular,
      height: store.activePage.computedHeight,
      width: store.activePage.computedWidth,
    });
  };
  return (
    <StyledTabs defaultValue="templates">
      <StyledList>
        <StyledTrigger value="templates">
          <TemplateIcon />
          <span>Templates</span>
        </StyledTrigger>
        <StyledTrigger value="photos" onClick={() => setIsPhoto(true)}>
          <PhotographIcon />
          <span>Photos</span>
        </StyledTrigger>
        <StyledTrigger value="text">
          <PencilAltIcon />
          <span>Text</span>
        </StyledTrigger>
      </StyledList>
      <Tabs.Content value="templates">Tab one content</Tabs.Content>
      <Tabs.Content value="photos">
        <PhotoWrapper>
          {photos.map((photo: any) => (
            <PhotoTab key={photo.id} onClick={() => selectPhoto(photo)}>
              <img src={photo.urls.thumb} />
            </PhotoTab>
          ))}
          {/* <PhotoTab />
          <PhotoTab />
          <PhotoTab /> */}
        </PhotoWrapper>
        {/* {photos.map((photo) => (
          <div>{JSON.stringify(photo, null, 2)}</div>
        ))} */}
      </Tabs.Content>
      <Tabs.Content value="text">Tab three content</Tabs.Content>
    </StyledTabs>
  );
};
