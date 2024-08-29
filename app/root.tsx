import { Links, Outlet, Scripts } from "@remix-run/react";
import { ThemeProvider } from "./ThemeProvider";
import {
  bodyContainer,
  contentWrapper,
  mainContent,
  mainContentContainer,
} from "./styles/layout.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Jinglin Shan" },
    {
      name: "description",
      content: "Welcome to Jinglin Shan's personal website",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
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
