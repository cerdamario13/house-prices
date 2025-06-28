
/**
 * Get the affordability data for a specified location
 * @param location location to get affordability
 * @returns 
 */
export const getAffordability = async (location: any) => {
  const params = {
    location: location
  }
  const queryString = new URLSearchParams(params).toString();
  const url = `http://127.0.0.1:8000/affordability?${queryString}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    return { "Error": "Error in the API Call" }
  }

};