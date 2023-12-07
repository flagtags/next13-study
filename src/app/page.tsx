import Image from 'next/image';
import ClientComponent from './client';
import ServerComponent from './server';

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}
