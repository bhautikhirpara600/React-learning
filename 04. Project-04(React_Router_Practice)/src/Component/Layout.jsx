import { Outlet } from "react-router";
import { Header, Footer } from "./index";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export { Layout }