import { createStore } from "polotno/model/store";
import Workspace from "polotno/canvas/workspace";
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
  return (
    <>
      <NavbarWrapper>
        <TabsWrapper>
          <Tab>
            <UploadIcon />
            <span>Upload</span>
          </Tab>
          <Tab>
            <TemplateIcon />
            <span>Templates</span>
          </Tab>
          <Tab>
            <PencilAltIcon />
            <span>Text</span>
          </Tab>
          <Tab>
            <DownloadIcon />
            <span>Download</span>
          </Tab>
        </TabsWrapper>
      </NavbarWrapper>
      <AppContainer>
        <SidebarWrapper></SidebarWrapper>
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
