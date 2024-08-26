import localFont from "next/font/local";
import { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.scss";
import classNames from "classnames/bind";
import MainFooter from "@/components/layout/main-footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "다핏",
};

const cx = classNames.bind(styles);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <div className={cx("body__container")}>
          <header style={{ height: 1000 }}></header>
          <main>{children}</main>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
