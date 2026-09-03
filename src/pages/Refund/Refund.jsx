import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import bgimage from "../../assets/images/paper-bg.webp";
import teaSketch from "../../assets/images/Menu/coffee-sketch.png";

// ─── Updated sections with new content ───
const sections = [
  {
    id: "initial-franchise-fee",
    number: "01",
    title: "Initial Franchise Fee",
    content: (
      <div className="space-y-5">
        <p className="leading-[1.8] text-[#60483a]">
          The initial franchise fee paid by the Franchisee is non-refundable
          under any circumstances, including:
        </p>

        <ul className="space-y-3 text-[#60483a]">
          <li>Voluntary withdrawal of application after signing</li>
          <li>Failure to obtain business licenses or permits</li>
          <li>Inability to secure a location or financing</li>
          <li>Termination due to non-compliance with pre-opening requirements</li>
        </ul>

        <div className="rounded-[16px] border border-[#d9c2aa] bg-[#f4e4d0]/60 px-5 py-4">
          <p className="leading-[1.75] text-[#654838]">
            ⚠️ This fee covers access to brand licensing, training, operational
            support, and administrative expenses incurred by the Franchisor.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "ongoing-royalties-marketing-fees",
    number: "02",
    title: "Ongoing Royalties and Marketing Fees",
    content: (
      <div className="space-y-5">
        <ul className="space-y-3 text-[#60483a]">
          <li>
            Royalties and monthly contributions to marketing funds are
            non-refundable once paid.
          </li>
          <li>
            These fees are based on gross revenue and are due regardless of
            franchisee performance, unless a specific waiver is granted in
            writing by the Franchisor.
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: "equipment-stock-setup-costs",
    number: "03",
    title: "Equipment, Stock & Setup Costs",
    content: (
      <div className="space-y-5">
        <ul className="space-y-3 text-[#60483a]">
          <li>
            Any payments made to third-party vendors for equipment, interior
            design, or stock are subject to the terms of those individual
            suppliers and are not the responsibility of the Franchisor.
          </li>
          <li>
            If the Franchisee decides to cancel the franchise before launch,
            no refund will be issued for any invested setup costs.
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: "franchise-termination",
    number: "04",
    title: "Franchise Termination",
    content: (
      <div className="space-y-5">
        <p className="leading-[1.8] text-[#60483a]">
          If the franchise is terminated (voluntarily or involuntarily), the
          Franchisee is not entitled to a refund of any fees previously paid,
          including:
        </p>

        <ul className="space-y-3 text-[#60483a]">
          <li>Initial Franchise Fee</li>
          <li>Training Fees</li>
          <li>Technology Setup Charges</li>
          <li>Inventory or Materials Purchased</li>
        </ul>
      </div>
    ),
  },

  {
    id: "exceptions",
    number: "05",
    title: "Exceptions",
    content: (
      <div className="space-y-5">
        <p className="leading-[1.8] text-[#60483a]">
          In rare and exceptional circumstances, the Franchisor may offer a
          partial refund at its sole discretion, and only if:
        </p>

        <ul className="space-y-3 text-[#60483a]">
          <li>No training or support has been provided yet</li>
          <li>
            The Franchisee cancels within a specific "cooling-off" period (if
            required by local franchise laws)
          </li>
        </ul>

        <div className="rounded-[16px] border border-[#ddc7b1] bg-[#fffaf5]/70 p-5">
          <p className="leading-[1.75] text-[#60483a]">
            All refund decisions will be made in writing and are final.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "dispute-resolution",
    number: "06",
    title: "Dispute Resolution",
    content: (
      <p className="leading-[1.85] text-[#60483a]">
        Any refund-related disputes shall follow the dispute resolution
        process outlined in the Franchise Agreement. The Franchisee agrees to
        waive claims for refunds outside of what is explicitly stated in this
        policy.
      </p>
    ),
  },
];

const quickLinks = sections.map(({ id, number, title }) => ({
  id,
  number,
  title,
}));

export default function Refund() {
  return (
    <>
      <Navbar />

      <main
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#f8ead7]
          text-[#3a2114]
        "
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Background wash */}
        <div className="pointer-events-none absolute inset-0 bg-[#f8ead7]/92" />

        {/* Decorative tea sketch */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-120px]
            top-[90px]
            hidden
            w-[430px]
            opacity-[0.12]
            mix-blend-multiply
            lg:block
          "
        >
          <img
            src={teaSketch}
            alt=""
            className="h-auto w-full object-contain"
          />
        </div>

        {/* ─── HERO ─── */}
        <section className="relative z-10">
          <div
            className="
              mx-auto
              flex
              min-h-[420px]
              w-full
              max-w-[1500px]
              items-center
              px-5
              py-20
              sm:px-8
              lg:min-h-[520px]
              lg:px-12
              lg:py-24
            "
          >
            <div className="w-full max-w-[820px]">
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#a65b27]" />
                <p
                  className="
                    text-[0.72rem]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#a65b27]
                  "
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Thatha Tea
                </p>
              </div>

              <h1
                className="
                  mt-6
                  text-[4rem]
                  leading-[0.9]
                  tracking-[-0.02em]
                  text-[#2b1a11]
                  sm:text-[5.5rem]
                  md:text-[6.5rem]
                  lg:text-[8rem]
                "
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                REFUND
                <br />
                <span className="text-[#b56322]">POLICY.</span>
              </h1>

              <div className="mt-7 flex items-center gap-3 text-[#8e6a53]">
                <span className="h-px w-12 bg-current/50" />
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 19s-6.5-4.2-6.5-9.1A3.9 3.9 0 0 1 12 7.4a3.9 3.9 0 0 1 6.5 2.5C18.5 14.8 12 19 12 19Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="h-px w-12 bg-current/50" />
              </div>

              <p
                className="
                  mt-7
                  max-w-[700px]
                  text-[0.98rem]
                  leading-[1.85]
                  text-[#60483a]
                  sm:text-[1.05rem]
                "
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                This Refund Policy outlines the terms governing refunds and
                payments associated with the Thatha Tea franchise, including
                franchise fees, royalties, setup costs, and other related
                expenses.
              </p>

              <div className="mt-7 inline-flex items-center rounded-full border border-[#dcc4ac] bg-[#fffaf5]/65 px-4 py-2">
                <span
                  className="
                    text-[0.68rem]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#76513a]
                  "
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Effective Date: 01/01/2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTENT ─── */}
        <section className="relative z-10 border-t border-[#d9c1a9]/50">
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1450px]
              gap-10
              px-5
              py-14
              sm:px-8
              sm:py-16
              lg:grid-cols-[250px_minmax(0,850px)]
              lg:gap-20
              lg:px-12
              lg:py-20
            "
          >
            {/* Sidebar (desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p
                  className="
                    text-[0.68rem]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#a65b27]
                  "
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  In this policy
                </p>

                <div className="mt-5 space-y-1 border-l border-[#d8c0a8]">
                  {quickLinks.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="
                        group
                        flex
                        gap-3
                        border-l-2
                        border-transparent
                        py-2
                        pl-4
                        transition
                        hover:border-[#b56322]
                      "
                    >
                      <span className="text-[0.64rem] font-bold text-[#a65b27]/70">
                        {item.number}
                      </span>
                      <span
                        className="
                          text-[0.73rem]
                          leading-[1.3]
                          text-[#725745]
                          group-hover:text-[#3a2114]
                        "
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        {item.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* Policy sections */}
            <div className="min-w-0">
              <div className="space-y-5">
                {sections.map((section) => (
                  <article
                    key={section.id}
                    id={section.id}
                    className="
                      scroll-mt-28
                      rounded-[20px]
                      border
                      border-[#ddc7b1]
                      bg-[#fffaf5]/65
                      px-5
                      py-6
                      sm:px-7
                      sm:py-8
                      lg:px-9
                      lg:py-9
                    "
                  >
                    <div className="flex gap-4 sm:gap-6">
                      <span
                        className="
                          shrink-0
                          pt-1
                          text-[0.68rem]
                          font-bold
                          tracking-[0.08em]
                          text-[#b56322]
                        "
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        {section.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h2
                          className="
                            text-[2rem]
                            leading-none
                            text-[#3a2114]
                            sm:text-[2.35rem]
                          "
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {section.title}
                        </h2>

                        <div className="mt-5">{section.content}</div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CLOSING ─── */}
        <section className="relative z-10 border-t border-[#d9c1a9]/50">
          <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20">
            <p
              className="text-[1.5rem] italic leading-[1.5] text-[#60483a] sm:text-[1.8rem]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              “Good tea is built on trust. So are good relationships.”
            </p>

            <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-[#8e6a53]">
              <span className="h-px w-12 bg-current/40" />
              <span className="text-[0.75rem]">✦</span>
              <span className="h-px w-12 bg-current/40" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}