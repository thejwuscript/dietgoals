import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center min-h-screen">
        <div className="flex justify-center items-center text-2xl mt-12 gap-2">
          <Image src="/images/veggie_bowl.png" alt="veggie bowl" width={56} height={56} />
          <h1 className="mt-4 text-5xl font-bold">DietGoals</h1>
        </div>
        <div className="my-16 text-2xl">
          <span>A no-frills calorie tracker to</span>
          <br />
          <span className="font-bold italic">reach your goals.</span>
        </div>
        <div className="text-7xl my-10 px-4">Coming soon</div>
        <div className="px-4 text-lg max-w-sm">
          Join <span className="font-bold text-xl">28</span> individuals who are eager to start their path to a
          healthier lifestyle!
        </div>
        <div className="flex justify-center flex-1 w-full bg-gradient-to-b from-transparent to-gray-300">
          <Image
            src="/images/plate.png"
            alt="plate"
            className="w-3/4 max-w-[400px] object-scale-down"
            width={514}
            height={512}
          />
        </div>
      </section>
    </div>
  );
}
