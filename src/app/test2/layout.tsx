import React from 'react';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Link href="/test2" prefetch={false}>
        홈
      </Link>
      <Link href="/test2/list" prefetch={false}>
        list
      </Link>
      <Link href="/test2/item" prefetch={false}>
        item
      </Link>
      {children}
    </div>
  );
}
