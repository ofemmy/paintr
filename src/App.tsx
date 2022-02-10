import { useRef } from "react";
import { createStore } from "polotno/model/store";
import Workspace from "polotno/canvas/workspace";
import { Menu } from "./components/Menu";
import { gray } from "@radix-ui/colors";
import {
  TemplateIcon,
  UploadIcon,
  PencilAltIcon,
  DownloadIcon,
} from "@heroicons/react/outline";
import {
  AppContainer,
  SidebarWrapper,
  NavbarWrapper,
  TabsWrapper,
  Arena,
  Tab,
} from "./components/StyledComps";
const store = createStore({
  key: "U0GwTXJJil1MecCnrzyk",
  showCredit: true,
});
const page = store.addPage({ width: 1080, height: 1920 });
function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    store.activePage?.addElement({
      type: "image",
      x: 0,
      y: 0,
      src: imageURL,
      height: page.computedHeight,
      width: page.computedWidth,
    });
  };
  const handleDownload = () => store.saveAsImage({ fileName: "result.png" });
  return (
    <>
      <input
        type="file"
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={handleUpload}
      />
      <NavbarWrapper>
        <TabsWrapper>
          <Tab onClick={() => inputRef.current?.click()}>
            <UploadIcon />
            <span>Upload</span>
          </Tab>

          <Tab onClick={handleDownload}>
            <DownloadIcon />
            <span>Download</span>
          </Tab>
        </TabsWrapper>
      </NavbarWrapper>
      <AppContainer>
        <SidebarWrapper>
          <Menu store={store} />
        </SidebarWrapper>
        <Arena>
          <Workspace
            store={store}
            components={{ PageControls: () => null }}
            pageBorderColor="white"
            backgroundColor={gray.gray4}
          />
        </Arena>
      </AppContainer>
    </>
  );
}

export default App;
