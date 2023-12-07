import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Test1</h1>
      <Link href="/test1" prefetch={false}>
        홈
      </Link>
      <Link href="/test1/list" prefetch={false}>
        list
      </Link>
      <Link href="/test1/item" prefetch={false}>
        item
      </Link>
    </div>
  );
}
