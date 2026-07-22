import Navbar from "@/components/layout/Navbar";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Intro from "@/components/sections/Intro/Intro";
import Hero from "@/components/sections/Hero/Hero";
function Home() {
    return (
        <>

            <Navbar />
            <Intro />
            <Hero />

            <main className="site-shell">
                <Section spacing="sm" className="pt-32 md:pt-40">
                    <Container>
                        <div className="max-w-3xl">
                            <span className="eyebrow mb-4">A traditional café experience</span>

                            <h1 className="text-display-xl text-[var(--color-primary)]">
                                THATHA TEA
                            </h1>

                            <p className="text-body-lg mt-6 max-w-2xl">
                                Warm tea, fresh snacks, bakery favorites, and a space shaped by
                                tradition, comfort, and everyday moments worth returning for.
                            </p>
                        </div>
                    </Container>
                </Section>
            </main>
        </>
    );
}

export default Home;