import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET api/properties/:propertyId
export const GET = async (
  req: Request,
  context: { params: { id: string } }
) => {
  try {
    await connectDB();

    const { params } = await context;
    const property = await Property.findById(params.id);

    if (!property) {
      return new Response("Property not found", { status: 404 });
    }

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal server error", { status: 500 });
  }
};
