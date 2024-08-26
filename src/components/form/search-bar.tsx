import classNames from "classnames/bind";
import styles from "./search-bar.module.scss";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function SearchBar() {
  return (
    <div className={cx("container")}>
      <Link href={"/search"} className={cx("mock-input")}>
        <span>트레이너/시설명으로 검색하세요</span>
        <Image src={"/img/icon/search.png"} alt="검색" width={24} height={24} />
      </Link>
    </div>
  );
}
