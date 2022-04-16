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

async function fetchUserId(email: string) {
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

async function fetchUserToken(email: string, password: string) {
  try {
    const res = await fetch(API_BASE_URL + "/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await res.json();
    return result.token;
  } catch (error) {
    console.log(error);
  }
}

async function fetchSetUserData(password, fullname, email) {
  const userData = {
    fullname,
    email,
    password,
  };

  console.log({ userData });

  fetch(API_BASE_URL + "/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}

async function fetchUpdateUserData(
  token,
  userData: { fullname?: string; password?: string }
) {
  const response = await fetch(API_BASE_URL + "/my-profile", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + token,
    },
    body: JSON.stringify(userData),
  });
  const result = await response.json();
  return result;
}

async function fetchMyPets(token) {
  const response = await fetch(API_BASE_URL + "/get-my-pets", {
    method: "GET",
    headers: {
      Authorization: "bearer " + token,
    },
  });
  const result = await response.json();
  return result;
}

export {
  fetchPetsAround,
  fetchUserId,
  fetchUserToken,
  fetchSetUserData,
  fetchUpdateUserData,
  fetchMyPets,
};
