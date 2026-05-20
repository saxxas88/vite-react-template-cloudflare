const InfoCard = ({
  title,
  description,
}: {
  title?: string | undefined;
  description?: string | undefined;
}) => {
  return (
    <>
      <div className="card text-neutral-content xs:w-100 w-full bg-gray-600 lg:w-75 xl:w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title || `Cookies!`}</h2>
          <p>
            {description ||
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta imperdiet odio, nec hendrerit nibh tincidunt sit amet. Nunc congue.`}
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
