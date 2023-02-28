export const FORMFETCH = async (date) => {
  try {
    const response = await fetch(
      "https://omas.onrender.com/api/models/createnewmodel-admin",
      // "http://localhost:7000/api/models/createnewmodel-admin",
      {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(date),
        method: "POST",
      }
    );

    const result = await response.json();
    if (!result.ok) {
      const error = result.message;
      throw error;
    }

    return result.message;
  } catch (error) {
    return error;
  }
};
