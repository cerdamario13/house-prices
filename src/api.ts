

const mainURL = 'http://127.0.0.1:8000'

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
  const url = `${mainURL}/affordability?${queryString}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    return { "Error": "Error in the API Call" }
  }

};

export const getPriceIndexRatio = async (location: any): Promise<{[key: string]: any}> => {
  const params = {
    location: location
  }
  const queryString = new URLSearchParams(params).toString();
  const url = `${mainURL}/pi_ratio?${queryString}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return {"Error": "PI Ratio Fetch response not ok"}
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error('There was a problem with the fetch operation - PI Ratio');
    return {"Error": "Error fetching PI Ratio"};
  }
};

export const getYTYChange = async (location: any): Promise<{[key: string]: any}> => {
  const params = {
    location: location
  }
  const queryString = new URLSearchParams(params).toString();
  const url = `${mainURL}/yty_change?${queryString}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return {"Error": "Year to Year Fetch response was not ok"}
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error('There was a problem with the fetch operation - Year to Year Change');
    return {"Error": "Error fetching year to year"};
  }
};