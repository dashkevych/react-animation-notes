import Image from "next/image";
import AnimatedText from "./AnimatedText";

export default function Home() {
  const introductionText =
    "Hi! I am Taras. I work with people from all over the world to create tailor-made WordPress and React websites.";
  return (
    <main className="flex min-h-screen flex-col gap-6 items-center p-24">
      <Image
        className="rounded-full border-4"
        src="/profile-picture.jpg"
        alt="profile picture"
        width={150}
        height={150}
        priority
      />
      <div className="flex flex-col gap-8 text-xl max-w-sm text-center">
        <AnimatedText text={introductionText} />

        <a
          href="https://www.tarascodes.com/"
          className="website-link border px-8 py-2 inline-block mx-auto uppercase text-sm font-bold"
        >
          Visit website
        </a>
      </div>
    </main>
  );
}
