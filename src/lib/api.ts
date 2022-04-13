const API_BASE_URL = "https://dwf-m7.herokuapp.com";

async function fetchPetsAround(coords) {
  try {
    const res = await fetch(
      API_BASE_URL + "/pets-around?lat=" + coords.lat + "&lng=" + coords.lng
    );
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function fetchuserId(email: string) {
  try {
    const res = await fetch(API_BASE_URL + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export { fetchPetsAround, fetchuserId };
