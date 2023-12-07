import Link from 'next/link';

const ListPage = () => {
  return (
    <div>
      <h1>List Page</h1>
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

export default ListPage;
