import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ThemeProvider } from "./ThemeProvider";
import { Sidebar } from "./components/sidebar/sidebar";
import { bodyContainer, mainContentContainer } from "./styles/styles.css";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

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
