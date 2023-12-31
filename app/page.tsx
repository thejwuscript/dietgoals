"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useVisitCount from "@/hooks/useVisitCount";

export default function Home() {
  const { data: visitCount, error } = useVisitCount();

  if (visitCount === null) {
    return <></>;
  }

  return (
    <div className={`relative bg-[url('/images/berries_bg.jpg')] bg-center sm:bg-cover bg-no-repeat ${styles.bg}`}>
      <section className="relative flex flex-col items-center min-h-screen">
        <div className="flex justify-center items-center text-2xl mt-12 gap-2">
          <Image src="/images/veggie_bowl.png" alt="veggie bowl" width={56} height={56} />
          <h1 className="text-5xl font-bold">DietGoals</h1>
        </div>
        <div className="flex flex-col items-center mt-10 flex-1 max-h-[55vh]">
          <div className="text-2xl">
            <span>A no-frills calorie tracker to</span>
            <br />
            <span className="font-bold italic">reach your goals.</span>
          </div>
          <div className="text-7xl px-4 flex justify-center items-center flex-1">
            <span className="w-min min-[500px]:w-full">Coming soon</span>
          </div>
          <div className="px-4 text-xl max-w-[400px] flex justify-center items-center flex-1">
            <div>
              Join <span className="font-bold text-2xl">{visitCount}</span> individuals who are eager to start their
              path to a healthier lifestyle!
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
