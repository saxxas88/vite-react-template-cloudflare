const CookiesCard = ({
  title,
  description,
}: {
  title?: string | undefined;
  description?: string | undefined;
}) => {
  return (
    <>
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title || `Cookies!`}</h2>
          <p>{description || `We are using cookies for no reason.`}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesCard;
