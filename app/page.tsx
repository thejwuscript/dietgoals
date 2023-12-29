import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-[url('/images/berries_bg.jpg')] bg-center min-h-[900px]:bg-cover bg-no-repeat">
      <section className="relative flex flex-col items-center min-h-screen">
        <div className="flex justify-center items-center text-2xl mt-12 gap-2">
          <Image src="/images/veggie_bowl.png" alt="veggie bowl" width={56} height={56} />
          <h1 className="mt-4 text-5xl font-bold">DietGoals</h1>
        </div>
        <div className="my-16 text-2xl">
          <span>A no-frills calorie tracker to</span>
          <br />
          <span className="font-bold italic">reach your goals.</span>
        </div>
        <div className="text-7xl my-10 px-4 flex justify-center items-center">
          <span className="w-min min-[500px]:w-full">Coming soon</span>
        </div>
        <div className="px-4 text-xl max-w-[400px] my-7 flex justify-center items-center">
          <div>
            Join <span className="font-bold text-2xl">28</span> individuals who are eager to start their path to a
            healthier lifestyle!
          </div>
        </div>
      </section>
    </div>
  );
}
