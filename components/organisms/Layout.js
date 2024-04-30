// components/Layout.js
import Header from "./Header";
import Container from "../molecules/container";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Container>{children}</Container>
        </div>
    );
};

export default Layout;
