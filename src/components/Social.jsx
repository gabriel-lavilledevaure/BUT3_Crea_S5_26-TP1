function Social({ platform, icon: Icon, user, total, today }) {
  const borderColor = {
    Facebook: "bg-facebook",
    Twitter: "bg-twitter",
    Instagram: "bg-instagram",
    YouTube: "bg-youtube",
  };

  const isPositive = today >= 0;

  return (
    <article className="bg-card relative flex h-54 flex-col items-center justify-center overflow-hidden rounded-md px-6">
      <div
        className={`absolute top-0 left-0 h-1 w-full ${borderColor[platform]}`}
      />

      <div className="mb-5 flex items-center gap-2">
        <Icon />

        <span className="text-text-secondary text-xs font-bold">{user}</span>
      </div>

      <strong className="text-5xl leading-none font-bold">
        {total >= 10000 ? `${Math.round(total / 1000)}k` : total}
      </strong>

      <span className="text-text-secondary mt-2 text-xs tracking-[0.35em]">
        {platform === "YouTube" ? "SUBSCRIBERS" : "FOLLOWERS"}
      </span>

      <span
        className={`mt-6 text-xs font-bold ${
          isPositive ? "text-positive" : "text-negative"
        }`}
      >
        {Math.abs(today)} Today
      </span>
    </article>
  );
}

export default Social;
