import Link from "next/link";
import styles from "./main-header.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

export default function MainHeader() {
  return (
    <div className={cx("container")}>
      <Link href={"/"}>DAFIT</Link>
      <Link href={"/cart"}>
        <Image
          src={"/img/icon/shopping_bag.png"}
          alt="장바구니"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
}
