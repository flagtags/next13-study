import Image from 'next/image';

const ListPage = async () => {
  const res = await fetch('http://localhost:3000/api/test');

  console.log(res);

  return (
    <div>
      <Image src="/images/test.png" width={100} height={100} />
    </div>
  );
};

export default ListPage;
