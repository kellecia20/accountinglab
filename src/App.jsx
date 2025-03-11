import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

import AppHeader from "./components/Header";
import AppRoutes from "./AppRoutes";  
import AppSider from "./components/Sider";

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <AppHeader />
        </Header>
        <Layout>
          <Sider width={200}>
            <AppSider />
          </Sider>

          <Layout>
            <Content style={{ marginLeft: "200px", padding: "20px" }}>
              <AppRoutes />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
