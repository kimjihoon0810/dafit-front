import SearchBar from "@/components/form/search-bar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
