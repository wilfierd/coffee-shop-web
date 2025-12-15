import Hero from "./components/home/Hero";
import Recover from "./components/home/Recover";
import MorningPromo from "./components/home/MorningPromo";
import Features from "./components/home/Features";
import Collection from "./components/products/Collection";

export default function Home({ searchParams }) {
  const showManualCollection = searchParams?.category === 'manual';

  return (
    <>
      <Hero />
      <Features />
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
