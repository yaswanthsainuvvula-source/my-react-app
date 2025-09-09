import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Home from "./Home";
import Sample from "./Sample";



function MyReactTabs()
{
    return(
    <Tabs>
        <TabList>
            <Tab>Home</Tab>
            <Tab>Sample</Tab>
        </TabList>
        <TabPanel>
            <Home></Home>
        </TabPanel>
        <TabPanel>
            <Sample></Sample>
        </TabPanel>
    </Tabs>
    );
}
export default MyReactTabs;