import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { ThemeProvider } from "./ThemeProvider";
import { Sidebar } from "./components/sidebar/sidebar";
import { bodyContainer, mainContentContainer } from "./styles/styles.css";

export default function App() {
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window;

    if (width < 1000) {
      return (
        <p>
          The website will support UI for mobile screen later. Please view on
          laptop.
        </p>
      );
    }
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>

      <ThemeProvider>
        <body className={bodyContainer}>
          <Sidebar />
          <div className={mainContentContainer}>
            <Outlet />
          </div>

          <Scripts />
        </body>
      </ThemeProvider>
    </html>
  );
}