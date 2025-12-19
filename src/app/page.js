import { Suspense } from 'react';
import Hero from "./components/home/Hero";
import Recover from "./components/home/Recover";
import MorningPromo from "./components/home/MorningPromo";
import Features from "./components/home/Features";
import Collection from "./components/products/Collection";

export default async function Home(props) {
  const searchParams = await props.searchParams;
  const selectedCategory = searchParams?.category;
  const showCollection = !!selectedCategory;

  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Features />
      </Suspense>
      {showCollection ? (
        <Collection initialCategory={selectedCategory} />
      ) : (
        <>
          <Recover />
          <MorningPromo />
        </>
      )}
    </>
  );
}
