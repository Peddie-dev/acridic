
export default function PhilosophyCard({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-start justify-center rounded-[18px] bg-white shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)] ${
        compact ? "w-[224px] gap-6 p-5" : "w-[223px] gap-6 px-5 py-3"
      } ${className}`}
    >
      <img
        src="/images/research/quote-marks.svg"
        alt=""
        width={24}
        height={19}
        className="h-[19px] w-6 rotate-180"
      />
      <p
        className={`font-semibold leading-[140%] text-[#1E293B] ${
          compact ? "text-[14px]" : "text-[16px] leading-[170%]"
        }`}
      >
        We transform data into knowledge, and knowledge into impact.
      </p>
      <span className="h-[3px] w-[60px] bg-[#16A34A]" />
      <p
        className={`font-medium text-[#64748B] ${
          compact ? "text-[12px] leading-[130%]" : "text-[14px] leading-[170%]"
        }`}
      >
        ACRDC Research Philosophy
      </p>
    </div>
  );
}
