import heroImg from '@/assets/images/support-hero.jpg';

export const SupportHeroBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-100/90 via-orange-50/70 to-amber-100/60 border border-orange-200/60 p-6 sm:p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="max-w-xl space-y-2.5 text-center md:text-left z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
          How can we help you?
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-600 leading-relaxed">
          Find answers, guides, and support for all your questions.
        </p>
      </div>

      <div className="w-48 sm:w-60 md:w-72 shrink-0 z-10">
        <img
          src={heroImg}
          alt="Support Help Desk"
          className="w-full h-auto object-contain rounded-2xl drop-shadow-sm hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-orange-300/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-amber-300/20 blur-2xl pointer-events-none" />
    </div>
  );
};

export default SupportHeroBanner;
