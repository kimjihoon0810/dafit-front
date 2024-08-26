"use client";

import { GNB } from "@/common/defines";
import Link from "next/link";
import styles from "./main-footer.module.scss";
import classNames from "classnames/bind";
import { usePathname } from "next/navigation";
import Image from "next/image";

const cx = classNames.bind(styles);

export default function MainFooter() {
  const pathname = usePathname();

  console.log({ pathname });

  return (
    <footer className={cx("container")}>
      <nav>
        <ul className={cx("gnb-list")}>
          {GNB.map((v) => {
            const active = pathname === v.path;
            return (
              <li key={`GNB_${v.title}`} className={cx("gnb-item")}>
                <Link href={v.path} className={cx({ active })}>
                  <Image
                    src={`${v.icon}_${active ? "on" : "off"}.png`}
                    alt={v.title}
                    width={22}
                    height={22}
                  />
                  <span>{v.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
