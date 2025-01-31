import Property from "@/components/property";
import { PropertyVM } from "@/models/PropertyVM";
import { getProperties } from "@/utils/request";

const PropertiesPage = async () => {
  const properties = await getProperties();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.length === 0
            ? "No found"
            : properties.map((property: PropertyVM) => (
                <Property key={property._id} property={property}></Property>
              ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
