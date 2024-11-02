import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/contexts/themeProvider";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jira",
  description: "Issues And Project Tracking Software",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen">{children}</main>
            <footer>
              <div className=" bg-gray-900 py-12 mx-auto text-center text-2xl px-4 text-gray-200">
                Made With ❤️ by Yogesh Singh.
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
