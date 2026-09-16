function SocialDetails({ platform, icon, indicator, amount, percentage }) {
  const isPositive = percentage >= 0;

  return (
    <article className="bg-card flex h-32 flex-col justify-between rounded-md p-6">
      <div className="flex items-center justify-between">
        <p className="text-text-secondary text-sm font-bold">{indicator}</p>

        <img className="h-5 w-5" src={icon} alt={`${platform} icon`} />
      </div>

      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold">{amount}</span>

        <span
          className={`text-xs font-bold ${
            isPositive ? "text-positive" : "text-negative"
          }`}
        >
          {percentage}%
        </span>
      </div>
    </article>
  );
}

export default SocialDetails;
