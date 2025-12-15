import { Suspense } from 'react';
import Hero from "./components/home/Hero";
import Recover from "./components/home/Recover";
import MorningPromo from "./components/home/MorningPromo";
import Features from "./components/home/Features";
import Collection from "./components/products/Collection";

export default async function Home(props) {
  const searchParams = await props.searchParams;
  const showManualCollection = searchParams?.category === 'manual';

  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Features />
      </Suspense>
      {showManualCollection ? (
        <Collection />
      ) : (
        <>
          <Recover />
          <MorningPromo />
        </>
      )}
    </>
  );
}
