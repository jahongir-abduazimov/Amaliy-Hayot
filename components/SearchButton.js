"use client";

import { useState } from "react";
import SearchModal from "./SearchModal";

export default function SearchButton({ className, children }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setSearchOpen(true)}
        className={`${className} cursor-pointer`}
      >
        {children}
      </button>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
