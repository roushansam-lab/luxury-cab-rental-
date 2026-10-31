"use client";

import * as React from "react";
import { ArrowRight, CarFront, Menu, Phone, X } from "lucide-react";
import { TiltedGridHero, type TiltedGridImage } from "@/components/ui/tilted-grid-hero";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { phoneHref, siteConfig, whatsappHref } from "@/lib/site";

const images: TiltedGridImage[] = [
  { src: "/images/jaguar-red.jpg", alt: "Red luxury sports coupe parked beside a stone building" },
  { src: "/images/bmw-autumn.jpg", alt: "Silver performance sedan in an autumn forest" },
  { src: "/images/mercedes-sunset.jpg", alt: "White luxury sedan beside the water at sunset" },
  { src: "/images/mercedes-winter.jpg", alt: "White luxury coupe on a snowy forest road" },
  { src: "/images/audi-night.jpg", alt: "Close-up of a luxury Audi illuminated at night" },
];

const services = [
  { title: "Weddings & Celebrations", text: "Make a memorable entrance on your special day." },
  { title: "Corporate Travel", text: "A polished travel experience for business and executive trips." },
  { title: "Airport Transfers", text: "Arrange a comfortable pickup or drop-off around your schedule." },
  { title: "Outstation Journeys", text: "Travel beyond Lucknow with a vehicle suited to your plans." },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080909] text-white">
      <TiltedGridHero
        images={images}
        speed={5}
        tileHeight={24}
        aspectRatio={16 / 10}
        gap={7}
        axis={52}
        mobileAxis={43}
        curve={72}
        fade={17}
        className="relative min-h-[720px] h-[100svh] w-full bg-[#080909]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,9,9,.88) 0%, rgba(8,9,9,.32) 35%, rgba(8,9,9,.60) 66%, #080909 100%)",
          }}
        />

        <div className="relative z-10 flex h-full flex-col">
          <header className="flex items-center justify-between gap-4 px-5 py-5 sm:px-10 lg:px-16">
            <a href="#home" aria-label={`${siteConfig.name} home`} className="flex shrink-0 items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full border border-amber-200/50 text-amber-200">
                <CarFront size={23} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold tracking-[0.2em]">LUXURY</span>
                <span className="block text-[10px] tracking-[0.32em] text-amber-200">CAB RENTAL</span>
              </span>
            </a>

            <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              <a className="transition hover:text-amber-200" href="#fleet">Our Fleet</a>
              <a className="transition hover:text-amber-200" href="#services">Services</a>
              <a className="transition hover:text-amber-200" href="#about">About Us</a>
            </nav>

            {phoneHref ? (
              <a href={phoneHref} className="hidden items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm transition hover:border-amber-200 hover:text-amber-200 sm:flex">
                <Phone size={15} aria-hidden="true" /> Call to Book
              </a>
            ) : (
              <a href="#contact" className="hidden items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm transition hover:border-amber-200 hover:text-amber-200 sm:flex">
                <Phone size={15} aria-hidden="true" /> Booking Enquiry
              </a>
            )}

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              className="rounded-full border border-white/20 p-3 md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </header>

          {mobileMenuOpen && (
            <nav id="mobile-nav" aria-label="Mobile navigation" className="border-y border-white/10 bg-black/90 px-6 py-4 md:hidden">
              <div className="flex flex-col gap-4 text-sm">
                <a onClick={() => setMobileMenuOpen(false)} href="#fleet">Our Fleet</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#services">Services</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#about">About Us</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#contact">Booking Enquiry</a>
              </div>
            </nav>
          )}

          <section
            id="home"
            className="flex flex-1 flex-col items-center justify-between px-5 pb-5 pt-8 text-center sm:px-8 sm:pb-6 sm:pt-9"
          >
            <div className="relative z-20 flex w-full flex-col items-center">
              <h1 className="-translate-y-3 max-w-6xl font-serif text-[clamp(calc(2.2rem+5px),calc(4.8vw+5px),calc(4.1rem+5px))] leading-[0.98] tracking-tight sm:-translate-y-4">
                <span className="block">Arrive in</span>
                <span className="block italic text-amber-200">Extraordinary Style.</span>
              </h1>
            </div>

            <div className="relative z-20 flex w-full flex-col items-center">
              <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <a href="#fleet" className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-200 px-7 py-4 text-sm font-semibold text-black transition hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">
                  Explore Our Fleet <ArrowRight size={17} aria-hidden="true" />
                </a>
                {whatsappHref ? (
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-black/35 px-7 py-4 text-sm font-medium backdrop-blur-sm transition hover:border-amber-200 hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">
                    Enquire on WhatsApp
                  </a>
                ) : (
                  <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-black/35 px-7 py-4 text-sm font-medium backdrop-blur-sm transition hover:border-amber-200 hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">
                    Make an Enquiry
                  </a>
                )}
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[9px] uppercase tracking-[0.14em] text-white/75 sm:mt-6 sm:gap-x-8 sm:text-[10px] sm:tracking-[0.18em]">
                <span>Premium Fleet</span><span className="text-amber-300" aria-hidden="true">✦</span>
                <span>Personalised Journeys</span><span className="text-amber-300" aria-hidden="true">✦</span>
                <span>Lucknow, India</span>
              </div>
            </div>
          </section>

          <footer className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-5 text-[9px] tracking-[0.14em] text-white/50 sm:px-10 sm:text-[10px] sm:tracking-[0.18em] lg:px-16">
            <span>COMFORT MEETS CLASS</span>
            <span className="hidden sm:block">LUCKNOW · UTTAR PRADESH</span>
            <a href="#fleet" className="shrink-0 text-amber-200 transition hover:text-white">DISCOVER MORE ↓</a>
          </footer>
        </div>
      </TiltedGridHero>

      <section aria-label="Our promise" className="border-y border-white/10 bg-[#101211] px-6 py-7 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 text-center sm:grid-cols-4 sm:gap-4">
          {[
            ["01", "Premium marque selection"],
            ["02", "Chauffeur-driven journeys"],
            ["03", "Personalised assistance"],
            ["04", "Lucknow-based service"],
          ].map(([number, label]) => (
            <div key={number} className="flex flex-col items-center gap-2">
              <span className="font-serif text-xl text-amber-200">{number}</span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-white/65 sm:text-xs">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="fleet" className="scroll-mt-10 px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200">The collection</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">A marque for every kind of arrival.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/60">
              Choose from a considered range of premium and luxury vehicles. Tell us what you have in mind and we’ll help confirm the right option for your date and journey.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Audi", note: "Contemporary design. Confident comfort.", image: "/images/audi-night.jpg", alt: "Audi luxury car detail at night", tag: "Modern luxury" },
              { name: "BMW", note: "A refined drive with a sporting spirit.", image: "/images/bmw-autumn.jpg", alt: "BMW luxury sedan on a tree-lined road", tag: "Executive presence" },
              { name: "Mercedes-Benz", note: "Timeless elegance for important moments.", image: "/images/mercedes-sunset.jpg", alt: "Mercedes luxury sedan at sunset", tag: "Classic elegance" },
              { name: "Jaguar", note: "Distinctive character and unmistakable style.", image: "/images/jaguar-red.jpg", alt: "Jaguar luxury car in a dramatic setting", tag: "Distinctive style" },
              { name: "Land Rover", note: "Premium versatility for a different kind of journey.", image: "", alt: "", tag: "Premium versatility" },
              { name: "Defender", note: "An iconic presence for statement-making travel.", image: "", alt: "", tag: "Iconic presence" },
            ].map((car) => (
              <CardContainer key={car.name} containerClassName="h-full" className="h-full w-full">
                <CardBody className="group/card relative flex h-full w-full flex-col rounded-2xl border border-white/10 bg-[#111312] p-4 transition-shadow duration-300 hover:border-amber-200/30 hover:shadow-2xl hover:shadow-amber-200/10">
                  <CardItem translateZ={60} className="w-full">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white/5 shadow-lg shadow-black/40">
                      {car.image ? (
                        <img src={car.image} alt={car.alt} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_rgba(245,220,160,0.16),_rgba(17,19,18,0.2)_65%)]">
                          <span className="font-serif text-4xl tracking-wide text-amber-100/80">{car.name}</span>
                        </div>
                      )}
                      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/85 backdrop-blur">{car.tag}</span>
                    </div>
                  </CardItem>
                  <div className="mt-auto flex items-end justify-between gap-4 px-2 pb-2 pt-6">
                    <div>
                      <CardItem as="h3" translateZ={50} className="font-serif text-2xl">{car.name}</CardItem>
                      <CardItem as="p" translateZ={35} className="mt-2 text-sm leading-6 text-white/55">{car.note}</CardItem>
                    </div>
                    <CardItem
                      as="a"
                      translateZ={40}
                      href={`${whatsappHref}?text=${encodeURIComponent(`Hello, I would like to enquire about ${car.name} rental. Please share availability and pricing.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${car.name}`}
                      className="mb-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-amber-200/50 text-amber-200 transition hover:bg-amber-200 hover:text-black"
                    >
                      <ArrowRight size={17} aria-hidden="true" />
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-white/40">Vehicle models, specifications and availability vary by date. Contact us to confirm the exact car, package and rental terms before booking.</p>
        </div>
      </section>

      <section id="services" className="scroll-mt-10 border-y border-white/10 bg-[#101211] px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Travel, your way</p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Made for the journeys that matter.</h2>
            <p className="max-w-lg text-sm leading-7 text-white/60">From a once-in-a-lifetime celebration to a smooth business transfer, make the journey part of the experience.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", title: "Weddings & Events", body: "Make an unforgettable entrance with a luxury car for your wedding, reception or celebration." },
              { n: "02", title: "Airport Transfers", body: "Plan a comfortable pickup or drop-off with a vehicle suited to your travel schedule." },
              { n: "03", title: "Corporate Travel", body: "A polished transport option for executive movement, meetings and visiting guests." },
              { n: "04", title: "Outstation Trips", body: "Discuss an out-of-city journey and find a suitable premium vehicle for the route." },
            ].map((item) => (
              <article key={item.n} className="min-h-56 rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-200/40">
                <span className="font-serif text-2xl text-amber-200">{item.n}</span>
                <h3 className="mt-8 text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-10 px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200">The experience</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">More than a car. A considered experience.</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
              Luxury Cab Rental helps you arrange premium chauffeur-driven travel in Lucknow and beyond. We focus on understanding your occasion, preferred vehicle and itinerary so we can guide you towards a suitable rental option.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 text-sm text-amber-200 transition hover:text-white">Discuss your journey <ArrowRight size={16} /></a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["A personal touch", "A direct conversation to understand your plans and preferences."],
              ["The right vehicle", "Explore suitable marques and vehicle options for your occasion."],
              ["Clear coordination", "Discuss timing, pickup details, route and rental terms in advance."],
              ["Journey-first service", "Plan around the experience you want to create."],
            ].map(([title, body], i) => (
              <div key={title} className={`rounded-2xl border border-white/10 p-6 ${i === 0 ? "bg-amber-200 text-black" : "bg-white/[0.025]"}`}>
                <span className={`text-xs uppercase tracking-[0.2em] ${i === 0 ? "text-black/55" : "text-amber-200"}`}>0{i + 1}</span>
                <h3 className="mt-6 font-serif text-xl">{title}</h3>
                <p className={`mt-3 text-sm leading-6 ${i === 0 ? "text-black/65" : "text-white/55"}`}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101211] px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200">A simple process</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Your journey, arranged in four steps.</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Share your plan", "Tell us your date, pickup point, destination and occasion."],
              ["02", "Choose your car", "Discuss the available marques and the vehicle that suits your plans."],
              ["03", "Confirm the details", "Review the quote, inclusions, timing and rental terms."],
              ["04", "Enjoy the journey", "Once confirmed, your travel plan is ready to go."],
            ].map(([number, title, body]) => (
              <div key={number} className="border-l border-amber-200/50 pl-5">
                <span className="text-xs tracking-[0.2em] text-amber-200">{number}</span>
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-10 px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Start a conversation</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Let’s plan your next arrival.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">Share a few details about your journey. We’ll use them to understand your requirements and discuss vehicle availability and pricing.</p>
            <div className="mt-9 space-y-5">
              <a href={phoneHref} className="flex items-center gap-4 text-white transition hover:text-amber-200">
                <span className="flex size-11 items-center justify-center rounded-full border border-white/15 text-amber-200"><Phone size={17} /></span>
                <span><span className="block text-xs text-white/45">Call us</span><span className="mt-1 block text-lg">+91 7007542583</span></span>
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white transition hover:text-amber-200">
                <span className="flex size-11 items-center justify-center rounded-full border border-white/15 text-amber-200"><ArrowRight size={17} /></span>
                <span><span className="block text-xs text-white/45">WhatsApp</span><span className="mt-1 block text-lg">+91 7007542583</span></span>
              </a>
            </div>
          </div>

          <form
            className="rounded-3xl border border-white/10 bg-[#111312] p-6 sm:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const message = [
                "Hello Luxury Cab Rental, I would like to enquire about a booking.",
                `Name: ${data.get("name") || "Not provided"}`,
                `Travel date: ${data.get("date") || "Not decided"}`,
                `Pickup: ${data.get("pickup") || "Not provided"}`,
                `Destination: ${data.get("destination") || "Not provided"}`,
                `Preferred vehicle: ${data.get("vehicle") || "Open to suggestions"}`,
                `Occasion / notes: ${data.get("notes") || "Not provided"}`,
              ].join("\n");
              window.open(`${whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
            }}
          >
            <h3 className="font-serif text-2xl">Tell us about your trip</h3>
            <p className="mt-2 text-sm text-white/50">Your enquiry opens directly in WhatsApp.</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-xs text-white/65">Your name
                <input required name="name" placeholder="Name" className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-amber-200/60" />
              </label>
              <label className="text-xs text-white/65">Travel date
                <input name="date" type="date" className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-200/60" />
              </label>
              <label className="text-xs text-white/65">Pickup location
                <input name="pickup" placeholder="e.g. Lucknow Airport" className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-amber-200/60" />
              </label>
              <label className="text-xs text-white/65">Destination
                <input name="destination" placeholder="Where are you travelling?" className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-amber-200/60" />
              </label>
              <label className="text-xs text-white/65 sm:col-span-2">Preferred vehicle
                <select name="vehicle" defaultValue="" className="mt-2 w-full rounded-xl border border-white/10 bg-[#191b1a] px-4 py-3 text-sm text-white outline-none transition focus:border-amber-200/60">
                  <option value="">Open to suggestions</option>
                  <option>Audi</option><option>BMW</option><option>Mercedes-Benz</option><option>Jaguar</option><option>Land Rover</option><option>Defender</option><option>Other / Please suggest</option>
                </select>
              </label>
              <label className="text-xs text-white/65 sm:col-span-2">Occasion or additional details
                <textarea name="notes" rows={3} placeholder="Wedding, airport transfer, corporate travel..." className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-amber-200/60" />
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-amber-200 px-6 py-4 text-sm font-semibold text-black transition hover:bg-amber-100">Send enquiry on WhatsApp <ArrowRight size={17} /></button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050606] px-6 py-10 sm:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em]">LUXURY <span className="text-amber-200">CAB RENTAL</span></p>
            <p className="mt-3 text-xs text-white/40">Premium chauffeur-driven journeys · Lucknow, Uttar Pradesh</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/55">
            <a href="#fleet" className="hover:text-amber-200">Our Fleet</a>
            <a href="#services" className="hover:text-amber-200">Services</a>
            <a href="#about" className="hover:text-amber-200">About</a>
            <a href="#contact" className="hover:text-amber-200">Enquire</a>
            <a href={phoneHref} className="hover:text-amber-200">Call +91 7007542583</a>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-[10px] text-white/30">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
      </footer>

      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with Luxury Cab Rental on WhatsApp" className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-black/10 bg-amber-200 px-5 py-4 text-xs font-semibold text-black shadow-2xl transition hover:-translate-y-1 hover:bg-amber-100">
        <span className="size-2 rounded-full bg-green-700" /> WhatsApp us
      </a>
    </main>
  );
}
