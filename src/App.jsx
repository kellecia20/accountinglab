import {Layout} from "antd";
import {BrowserRouter as Router} from "react-router-dom";
import { useState, useEffect } from "react";

const {Header, Content} = Layout;

function App() {
    return (
        <Layout>
            <Router>
                <Header>
                    {/* <AppHeader/> */}
                </Header>
                <Content>
                    <AppRoutes/>
                </Content>
            </Router>
        </Layout>
    );
}

export default App;
