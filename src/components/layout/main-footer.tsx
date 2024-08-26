import { GNB } from "@/common/defines";
import Link from "next/link";
import styles from "./main-footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function MainFooter() {
  return (
    <footer className={cx("container")}>
      <nav>
        <ul className={cx("gnb-list")}>
          {GNB.map((v) => {
            return (
              <li key={`GNB_${v.title}`} className={cx("gnb-item")}>
                <Link href={v.path}>
                  {v.icon}
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
