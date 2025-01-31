const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export const getProperties = async () => {
  try {
    if (!API_DOMAIN) {
      return [];
    }

    const res = await fetch(`${API_DOMAIN}/properties`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};

export const getProperty = async (id: string) => {
  try {
    if (!API_DOMAIN) {
      return null;
    }

    const res = await fetch(`${API_DOMAIN}/properties/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching property:", error);
    return null;
  }
};
