import Image from 'next/image'
import dynamic from 'next/dynamic';

const Conversor = dynamic(() => import('../components/Conversor'), {
  ssr: false
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Conversor />
    </main>
  )
}
