import MainHeader from "@/components/header/main-header";
import "./globals.css";
import styles from "./layout.module.scss";
import classNames from "classnames/bind";
import localFont from "next/font/local";

const cx = classNames.bind(styles);

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata = {
  title: "다핏",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <div className={cx("body__container")}>
          <MainHeader />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
