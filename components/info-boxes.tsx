import InfoBox from "./info-box";
const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="Discover Properties"
            backgroundColor="bg-gray-100"
            textColor="text-gray-800"
            buttonInfo={{
              text: "Discover Properties",
              link: "/properties",
              color: "bg-gray-800"
            }}
          >
            Discover new properties in your area and find the best ones that
            suit your needs.
          </InfoBox>
          <InfoBox
            heading="Add a Property"
            backgroundColor="bg-blue-100"
            textColor="text-gray-800"
            buttonInfo={{
              text: "Discover Properties",
              link: "/properties/add",
              color: "bg-blue-500"
            }}
          >
            List new properties and reach potential tenants. Rent as a temporary
            residence or for long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
