"use client";

import Image from "next/image";
import styles from "./main-header.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { GNB } from "@/common/defines";

const cx = classNames.bind(styles);

export default function MainHeader() {
  return (
    <header className={cx("header")}>
      <nav className={cx("inner")}>
        <Link href={"/"}>
          <Image src={"/favicon.ico"} alt="다핏" width={44} height={44} />
        </Link>
        <ul className={cx("gnb-list")}>
          {GNB.map((link) => (
            <li key={link.title}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
