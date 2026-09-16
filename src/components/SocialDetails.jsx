function SocialDetails({
  icon: Icon,
  upIcon: UpIcon,
  downIcon: DownIcon,
  indicator,
  amount,
  percentage,
}) {
  const isPositive = percentage >= 0;

  const TrendIcon = isPositive ? UpIcon : DownIcon;

  const isThousands = amount >= 10000;

  const counterValue = isThousands ? Math.round(amount / 1000) : amount;

  return (
    <article className="bg-card flex h-32 flex-col justify-between rounded-md p-6">
      <div className="flex items-center justify-between">
        <p className="text-text-secondary text-sm font-bold">{indicator}</p>

        <Icon />
      </div>

      <div className="flex items-end justify-between">
        <span
          className={`counter text-3xl font-bold ${
            isThousands ? "counter-k" : ""
          }`}
          style={{ "--number": counterValue }}
        />

        <div className="flex items-center gap-1">
          <TrendIcon />

          <span
            className={`text-xs font-bold ${
              isPositive ? "text-positive" : "text-negative"
            }`}
          >
            {Math.abs(percentage)}%
          </span>
        </div>
      </div>
    </article>
  );
}

export default SocialDetails;
