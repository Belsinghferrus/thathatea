import React from "react";

export default function HowWeEvolvedSection() {
  const milestones = [
    {
      year: "1991",
      title: "A Dream",
      description: (
        <>
          A small tea stall
          <br />
          with a big heart.
        </>
      ),
      icon: "☕",
    },
    {
      year: "1990s",
      title: "Building Trust",
      description: (
        <>
          Quality tea.
          <br />
          Happy customers.
        </>
      ),
      icon: "🍵",
    },
    {
      year: "2000s",
      title: "Expanding Roots",
      description: (
        <>
          More outlets.
          <br />
          More communities.
        </>
      ),
      icon: "🏪",
    },
    {
      year: "2010s",
      title: "Strengthening Systems",
      description: (
        <>
          Better processes.
          <br />
          Stronger teams.
        </>
      ),
      icon: "👥",
    },
    {
      year: "2020s",
      title: "Digital Transformation",
      description: (
        <>
          Data. Technology.
          <br />
          Smarter decisions.
        </>
      ),
      icon: "💻",
    },
    {
      year: "Beyond",
      title: "Brewing the Future",
      description: (
        <>
          More innovation.
          <br />
          More impact.
        </>
      ),
      icon: "🚀",
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f8ead7]
        px-4
        py-16
        sm:px-6
        sm:py-20
        md:px-8
        lg:px-12
        lg:py-24
      "
    >
      {/* ============================================================
          VINTAGE SIDE ILLUSTRATIONS
      ============================================================ */}

      {/* Left illustration */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-80px]
          top-[20px]
          hidden
          w-[280px]
          opacity-[0.14]
          mix-blend-multiply
          md:block
          lg:left-[-40px]
          lg:w-[330px]
        "
      >
        <svg
          viewBox="0 0 400 520"
          className="h-auto w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* water tower */}
          <path
            d="M125 70h90l-16 38h-58z"
            stroke="#6c4328"
            strokeWidth="4"
          />
          <path
            d="M134 108v170M206 108v170M150 108v170M190 108v170"
            stroke="#6c4328"
            strokeWidth="3"
          />
          <path
            d="M118 278h104M108 300h124"
            stroke="#6c4328"
            strokeWidth="3"
          />

          {/* buildings */}
          <path
            d="M28 310v-90h70v90M98 310V180h88v130M186 310v-115h82v115"
            stroke="#6c4328"
            strokeWidth="3"
          />

          {/* windows */}
          <path
            d="M45 240h18v25H45zM75 240h18v25H75zM115 210h18v25h-18zM145 210h18v25h-18zM204 225h18v25h-18zM234 225h18v25h-18z"
            stroke="#6c4328"
            strokeWidth="2"
          />

          {/* street */}
          <path
            d="M15 320c80-15 170-15 265 0 50 8 78 17 105 30"
            stroke="#6c4328"
            strokeWidth="3"
          />
          <path
            d="M15 350c75-12 170-12 280 5"
            stroke="#6c4328"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Right illustration */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-80px]
          top-[35px]
          hidden
          w-[320px]
          opacity-[0.15]
          mix-blend-multiply
          md:block
          lg:right-[-30px]
          lg:w-[380px]
        "
      >
        <svg
          viewBox="0 0 430 540"
          className="h-auto w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* building */}
          <path
            d="M155 100h180v250H155z"
            stroke="#6c4328"
            strokeWidth="4"
          />

          {/* roof */}
          <path
            d="M135 100h220l-30-55H165z"
            stroke="#6c4328"
            strokeWidth="4"
          />

          {/* columns */}
          <path
            d="M175 110v240M210 110v240M245 110v240M280 110v240M315 110v240"
            stroke="#6c4328"
            strokeWidth="2.5"
          />

          {/* windows */}
          <path
            d="M175 135h24v38h-24zM215 135h24v38h-24zM255 135h24v38h-24zM295 135h24v38h-24z"
            stroke="#6c4328"
            strokeWidth="2"
          />

          {/* storefront */}
          <path
            d="M165 190h160v55H165z"
            stroke="#6c4328"
            strokeWidth="3"
          />

          {/* awning */}
          <path
            d="M160 190h170l-8 22H168z"
            stroke="#6c4328"
            strokeWidth="3"
          />

          {/* sign */}
          <rect
            x="190"
            y="78"
            width="110"
            height="45"
            rx="4"
            stroke="#6c4328"
            strokeWidth="3"
          />

          <text
            x="245"
            y="107"
            textAnchor="middle"
            fill="#6c4328"
            fontSize="17"
            fontWeight="700"
          >
            THATHA TEA
          </text>

          {/* street */}
          <path
            d="M110 350c100-30 210-30 320 0"
            stroke="#6c4328"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* ============================================================
          MAIN CONTENT
      ============================================================ */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
        {/* ==========================================================
            SECTION TITLE
        ========================================================== */}

        <div className="mx-auto mb-12 max-w-[700px] text-center sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#9c5c30]/50 sm:w-12" />

            <span className="text-[#9c5c30]">→</span>

            <p
              className="
                text-[0.72rem]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#75482c]
                sm:text-[0.82rem]
              "
              style={{
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Our Journey
            </p>

            <span className="text-[#9c5c30]">←</span>

            <span className="h-px w-8 bg-[#9c5c30]/50 sm:w-12" />
          </div>

          <h2
            className="
              mt-5
              text-[3rem]
              leading-none
              text-[#3a2114]
              sm:text-[4rem]
              md:text-[4.5rem]
              lg:text-[5rem]
            "
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            HOW WE EVOLVED
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[560px]
              text-[0.9rem]
              leading-[1.75]
              text-[#765844]
              sm:text-[1rem]
            "
            style={{
              fontFamily: "'Manrope', sans-serif",
            }}
          >
            From a humble dream to a growing tea community — every chapter
            shaped the Thatha Tea we know today.
          </p>
        </div>

        {/* ==========================================================
            DESKTOP TIMELINE
        ========================================================== */}

        <div className="relative hidden lg:block">
          {/* Connector line */}
          <div className="absolute left-[8%] right-[8%] top-[57px] h-px bg-[#9a5b2b]/45" />

          {/* Small connector dots */}
          <div className="absolute left-[8%] right-[8%] top-[54px] flex justify-between">
            {milestones.slice(0, -1).map((_, index) => (
              <span
                key={index}
                className="h-[7px] w-[7px] rounded-full bg-[#9a5b2b]/70"
              />
            ))}
          </div>

          <div className="grid grid-cols-6 gap-4">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon circle */}

                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-[82px]
                    w-[82px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    ${
                      index === 0
                        ? "border-[#9a511e] bg-[#9a511e]"
                        : "border-[#9b785e]/45 bg-[#f7e5cd]"
                    }
                    shadow-[0_7px_15px_rgba(84,48,25,0.08)]
                  `}
                >
                  <span
                    className={`
                      text-[2rem]
                      ${
                        index === 0
                          ? "grayscale brightness-0 invert"
                          : ""
                      }
                    `}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                </div>

                {/* Year */}

                <p
                  className="
                    mt-5
                    text-[1.35rem]
                    leading-none
                    text-[#4a291a]
                  "
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  {item.year}
                </p>

                {/* Title */}

                <p
                  className="
                    mt-2
                    text-[0.85rem]
                    font-bold
                    leading-[1.3]
                    text-[#75482c]
                  "
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {item.title}
                </p>

                {/* Description */}

                <p
                  className="
                    mt-3
                    text-[0.73rem]
                    leading-[1.6]
                    text-[#806653]
                  "
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================
            MOBILE TIMELINE
        ========================================================== */}

        <div className="relative lg:hidden">
          {/* vertical connector */}

          <div className="absolute bottom-8 left-[28px] top-8 w-px bg-[#9a5b2b]/30" />

          <div className="relative space-y-7 sm:space-y-8">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className="relative flex items-start gap-5"
              >
                {/* Icon */}

                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    ${
                      index === 0
                        ? "border-[#9a511e] bg-[#9a511e]"
                        : "border-[#9b785e]/45 bg-[#f7e5cd]"
                    }
                    shadow-[0_6px_12px_rgba(84,48,25,0.08)]
                  `}
                >
                  <span
                    className={`text-[1.5rem] ${
                      index === 0 ? "grayscale brightness-0 invert" : ""
                    }`}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                </div>

                {/* Content */}

                <div className="flex-1 pt-1">
                  <div className="flex items-baseline gap-3">
                    <p
                      className="text-[1.35rem] leading-none text-[#4a291a]"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                      }}
                    >
                      {item.year}
                    </p>

                    <span className="h-px flex-1 bg-[#9a5b2b]/20" />
                  </div>

                  <p
                    className="
                      mt-2
                      text-[0.85rem]
                      font-bold
                      uppercase
                      tracking-[0.04em]
                      text-[#75482c]
                    "
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  >
                    {item.title}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[0.78rem]
                      leading-[1.65]
                      text-[#806653]
                    "
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================
            BOTTOM DECORATIVE DIVIDER
        ========================================================== */}

        <div className="mx-auto mt-14 flex items-center justify-center gap-4 text-[#9a5b2b]/60 sm:mt-16">
          <span className="h-px w-14 bg-current sm:w-24" />

          <span className="text-[0.8rem]">✦</span>

          <span className="h-px w-14 bg-current sm:w-24" />
        </div>
      </div>
    </section>
  );
}