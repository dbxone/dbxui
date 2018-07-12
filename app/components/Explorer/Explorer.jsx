import React from "react";
import {Tabs, Tab} from "../Utility/Tabs";
import BlocksContainer from "./BlocksContainer";

class Explorer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    name: "blocks",
                    link: "/explorer/blocks",
                    translate: "explorer.blocks.title",
                    content: BlocksContainer
                }
            ]
        };
    }

    render() {
        let {tab} = this.props.match.params;
        let defaultActiveTab = this.state.tabs.findIndex(t => t.name === tab);

        let tabs = [];

        for (var i = 0; i < this.state.tabs.length; i++) {
            let currentTab = this.state.tabs[i];

            let TabContent = currentTab.content;
            let isLinkTo = defaultActiveTab == i ? "" : currentTab.link;

            tabs.push(
                <Tab key={i} title={currentTab.translate} isLinkTo={isLinkTo}>
                    <TabContent />
                </Tab>
            );
        }

        return (
            <Tabs
                defaultActiveTab={defaultActiveTab}
                segmented={false}
                setting="explorer-tabs"
                tabsClass="account-overview bordered-header content-block"
                contentClass="tab-content padding"
            >
                {tabs}
            </Tabs>
        );
    }
}

export default Explorer;
