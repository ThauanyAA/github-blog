import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <main>
      <Header />
      <p>This is the default layout for the application.</p>
      <Outlet />
    </main>
  );
}