import Hero from '@/components/layout/Hero';
import HeroMenu from '@/components/layout/HomeMenu';
import SectionHeaders from '@/components/layout/SectionHeaders';

export default function Home() {
  return (
    <>
      <Hero />
      <HeroMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam
            voluptas soluta animi, fuga cupiditate perferendis tenetur illo
            vitae, exercitationem magni.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam
            voluptas soluta animi, fuga cupiditate perferendis tenetur
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam
            tenetur
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a
            href="tel:+971545109920 "
            className="text-4xl underline text-gray-500"
          >
            +971 545 109 920
          </a>
        </div>
      </section>
    </>
  );
}
