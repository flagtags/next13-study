import Link from 'next/link';

const ItemPage = () => {
  return (
    <div>
      <h1>Item Page</h1>
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
};

export default ItemPage;
