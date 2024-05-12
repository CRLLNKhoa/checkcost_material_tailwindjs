import { Inter } from "next/font/google";
import "./globals.css";
import MaterialProvider from "@/providers/MaterialProvider";
import NavListMenu from "@/components/layouts/header/header";
import { SimpleFooter } from "@/components/layouts/footer/footer";
import { ClerkProvider } from "@clerk/nextjs";
import "sweetalert2/src/sweetalert2.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Check Cost",
  description: "Website Check Cost coded by Carolo Lương Khoa. Đây là một trang web hỗ trợ bạn trong việc chơi game DBG. Các danh mục hàng đầu bao gồm: Single Rewind, Double Rewind, Time Rewind, Push day, Đội hình, World tree, Tính dame, Blogs, và các bài viết khác.",
  referrer: "origin-when-cross-origin",
  keywords: ["Lương Khoa", "Carolo Lương Khoa", "Day bygone","Check Cost", "Check Rewind","Code by Lương Khoa"],
  authors: [{ name: "Carolo Lương Khoa" }],
  creator: "Carolo Lương Khoa",
  publisher: "Carolo Lương Khoa",
  openGraph: {
    title: "Check Cost DBG",
    description: "Website Check Cost coded by Carolo Lương Khoa",
    url: "https://check-rewind.vercel.app",
    siteName: "Check rewind",
    images: [
      {
        url: "https://i.ibb.co/JsjvtJn/www-check-rewind-vercel-app.png", // Must be an absolute URL
      },
    ],
    locale: "vi",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <MaterialProvider>
        <ClerkProvider>
          <body className={inter.className + "relative"}>
            <NavListMenu />
            <div className="min-h-screen max-w-screen-xl mx-auto">
              {children}
            </div>
            <SimpleFooter />
          </body>
        </ClerkProvider>
      </MaterialProvider>
    </html>
  );
}
