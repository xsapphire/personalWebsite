import { Links, Outlet, Scripts } from "@remix-run/react";
import { ThemeProvider } from "./ThemeProvider";
import {
  bodyContainer,
  mainContent,
  mainContentContainer,
} from "./styles/layout.css";
import { Sidebar } from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>

      <ThemeProvider>
        <body className={bodyContainer}>
          <Sidebar />
          <div className={mainContentContainer}>
            <div className={mainContent}>
              <Outlet />
            </div>
          </div>

          <Scripts />
        </body>
      </ThemeProvider>
    </html>
  );
}
