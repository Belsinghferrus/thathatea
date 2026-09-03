import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import bgimage from "../../assets/images/paper-bg.webp";
import teaSketch from "../../assets/images/Menu/coffee-sketch.png";

const sections = [
  {
    id: "grant-of-franchise",
    number: "01",
    title: "Grant of Franchise",
    content: (
      <p className="leading-[1.85] text-[#60483a]">
        The Franchisor grants the Franchisee a non-exclusive,
        non-transferable license to operate a Thatha Tea outlet at the
        agreed location under the brand and business model of the
        Franchisor.
      </p>
    ),
  },

  {
    id: "franchise-fee-and-royalties",
    number: "02",
    title: "Franchise Fee and Royalties",
    content: (
      <ul className="space-y-3 text-[#60483a]">
        <li>
          An initial, non-refundable franchise fee of{" "}
          <strong className="font-semibold text-[#3a2114]">
            0.50 Paisa per bill
          </strong>{" "}
          is payable upon signing this Agreement.
        </li>

        <li>
          Ongoing royalty fees of{" "}
          <strong className="font-semibold text-[#3a2114]">
            5% of monthly gross sales
          </strong>{" "}
          are to be paid by the 5th of each month.
        </li>
      </ul>
    ),
  },

  {
    id: "term-and-renewal",
    number: "03",
    title: "Term and Renewal",
    content: (
      <ul className="space-y-3 text-[#60483a]">
        <li>
          The initial term of this Agreement is{" "}
          <strong className="font-semibold text-[#3a2114]">
            2 years
          </strong>
          .
        </li>

        <li>
          Renewal is subject to mutual agreement and performance review,
          with an applicable renewal fee of{" "}
          <strong className="font-semibold text-[#3a2114]">
            20%
          </strong>
          .
        </li>
      </ul>
    ),
  },

  {
    id: "training-and-support",
    number: "04",
    title: "Training and Support",
    content: (
      <ul className="space-y-3 text-[#60483a]">
        <li>
          The Franchisor shall provide initial training covering
          operations, marketing, and customer service.
        </li>

        <li>
          Ongoing support will be available for the duration of the
          Agreement, including operational guidance and periodic audits.
        </li>
      </ul>
    ),
  },

  {
    id: "brand-usage",
    number: "05",
    title: "Brand Usage",
    content: (
      <ul className="space-y-3 text-[#60483a]">
        <li>
          The Franchisee must use all brand elements (logos, recipes,
          marketing materials) as per Franchisor guidelines.
        </li>

        <li>
          Unauthorized modification of branding or menu is strictly
          prohibited.
        </li>
      </ul>
    ),
  },

  {
    id: "product-sourcing",
    number: "06",
    title: "Product Sourcing",
    content: (
      <p className="leading-[1.85] text-[#60483a]">
        Franchisee agrees to purchase core products and ingredients only
        from authorized suppliers or directly from the Franchisor.
      </p>
    ),
  },

  {
    id: "operational-standards",
    number: "07",
    title: "Operational Standards",
    content: (
      <ul className="space-y-3 text-[#60483a]">
        <li>
          Franchisee must maintain the hygiene, quality, and customer
          service standards prescribed by the Franchisor.
        </li>

        <li>
          Regular inspections may be conducted.
        </li>
      </ul>
    ),
  },

  {
    id: "marketing-and-promotion",
    number: "08",
    title: "Marketing and Promotion",
    content: (
      <ul className="space-y-3 text-[#60483a]">
        <li>
          Franchisee must participate in national and regional marketing
          campaigns initiated by the Franchisor.
        </li>

        <li>
          A local marketing budget of{" "}
          <strong className="font-semibold text-[#3a2114]">
            10% of monthly gross sales
          </strong>{" "}
          must be allocated.
        </li>
      </ul>
    ),
  },

  {
    id: "termination",
    number: "09",
    title: "Termination",
    content: (
      <div className="space-y-5">
        <p className="leading-[1.85] text-[#60483a]">
          This Agreement may be terminated under the following
          conditions:
        </p>

        <ul className="space-y-3 text-[#60483a]">
          <li>Breach of contract</li>
          <li>Non-payment of fees or royalties</li>
          <li>Failure to meet performance standards</li>
          <li>Voluntary closure or insolvency</li>
        </ul>
      </div>
    ),
  },

  {
    id: "post-term-obligations",
    number: "10",
    title: "Post-Term Obligations",
    content: (
      <div className="space-y-5">
        <p className="leading-[1.85] text-[#60483a]">
          Upon termination:
        </p>

        <p className="leading-[1.85] text-[#60483a]">
          Franchisee must cease using the brand name and return all
          proprietary materials.
        </p>

        <div className="rounded-[16px] border border-[#d9c2aa] bg-[#f4e4d0]/60 px-5 py-4">
          <p className="leading-[1.8] text-[#654838]">
            Non-compete clause applies for{" "}
            <strong className="font-semibold text-[#3a2114]">
              2 years
            </strong>{" "}
            within{" "}
            <strong className="font-semibold text-[#3a2114]">
              50 kilometers/miles
            </strong>{" "}
            of the location.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "confidentiality",
    number: "11",
    title: "Confidentiality",
    content: (
      <p className="leading-[1.85] text-[#60483a]">
        Franchisee agrees to maintain confidentiality of all trade
        secrets, recipes, and business strategies shared during and
        after the term of the Agreement.
      </p>
    ),
  },

  {
    id: "dispute-resolution",
    number: "12",
    title: "Dispute Resolution",
    content: (
      <p className="leading-[1.85] text-[#60483a]">
        Any disputes arising from this Agreement shall be resolved
        through mediation. If unresolved, the matter will be settled in
        the courts of{" "}
        <strong className="font-semibold text-[#3a2114]">
          [Jurisdiction]
        </strong>
        .
      </p>
    ),
  },

  {
    id: "miscellaneous",
    number: "13",
    title: "Miscellaneous",
    content: (
      <ul className="space-y-3 text-[#60483a]">
        <li>
          This Agreement represents the entire understanding between the
          parties.
        </li>

        <li>
          No amendment or waiver shall be valid unless in writing and
          signed by both parties.
        </li>
      </ul>
    ),
  },
];

export default function TermsAndConditions() {
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
        {/* ============================================================
            BACKGROUND WASH
        ============================================================ */}

        <div className="pointer-events-none absolute inset-0 bg-[#f8ead7]/92" />

        {/* ============================================================
            DECORATIVE SKETCH
        ============================================================ */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-120px]
            top-[80px]
            hidden
            w-[440px]
            opacity-[0.11]
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

        {/* ============================================================
            HERO
        ============================================================ */}

        <section className="relative z-10">
          <div
            className="
              mx-auto
              flex
              min-h-[430px]
              w-full
              max-w-[1500px]
              items-center
              px-5
              py-20
              sm:px-8
              lg:min-h-[500px]
              lg:px-12
              lg:py-24
            "
          >
            <div className="w-full max-w-[850px]">
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
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
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
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                TERMS &
                <br />
                <span className="text-[#b56322]">
                  CONDITIONS.
                </span>
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
                  max-w-[760px]
                  text-[0.98rem]
                  leading-[1.85]
                  text-[#60483a]
                  sm:text-[1.05rem]
                "
                style={{
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                These Terms and Conditions set forth the rights,
                obligations, and responsibilities between the Franchisee
                and Thatha Tea, a company incorporated under the laws of
                India/Karnataka, having its principal place of business
                at 17/1, Saint Thomas Town, Kammanahalli, Bengaluru, KA
                560084.
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
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Last Updated: 01/01/2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CONTENT
        ============================================================ */}

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
            {/* ========================================================
                DESKTOP INDEX
            ======================================================== */}

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
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  In this agreement
                </p>

                <div className="mt-5 border-l border-[#d8c0a8]">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
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
                      <span
                        className="
                          text-[0.64rem]
                          font-bold
                          text-[#a65b27]/70
                        "
                      >
                        {section.number}
                      </span>

                      <span
                        className="
                          text-[0.73rem]
                          leading-[1.3]
                          text-[#725745]
                          group-hover:text-[#3a2114]
                        "
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                        }}
                      >
                        {section.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* ========================================================
                TERMS CONTENT
            ======================================================== */}

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
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                        }}
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
                          style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                          }}
                        >
                          {section.title}
                        </h2>

                        <div className="mt-5">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CLOSING
        ============================================================ */}

        <section className="relative z-10 border-t border-[#d9c1a9]/50">
          <div className="mx-auto max-w-[950px] px-5 py-16 text-center sm:px-8 lg:py-20">
            <p
              className="
                text-[1.45rem]
                italic
                leading-[1.5]
                text-[#60483a]
                sm:text-[1.75rem]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              “Built on trust, consistency, and a shared commitment to
              the Thatha Tea legacy.”
            </p>

            <div className="mx-auto mt-6 flex items-center justify-center gap-4 text-[#9a5b2b]/60">
              <span className="h-px w-14 bg-current sm:w-24" />
              <span className="text-[0.8rem]">✦</span>
              <span className="h-px w-14 bg-current sm:w-24" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}