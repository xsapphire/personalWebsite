import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { ThemeProvider } from "./ThemeProvider";
import {
  bodyContainer,
  contentWrapper,
  mainContent,
  mainContentContainer,
} from "./styles/layout.css";
import { Sidebar } from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>

      <body style={{ margin: 0 }}>
        <ThemeProvider>
          <div className={bodyContainer}>
            <Sidebar />
            <div className={mainContentContainer}>
              <div className={mainContent}>
                <div className={contentWrapper}>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>

        <Scripts />
      </body>
    </html>
  );
}
