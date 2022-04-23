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

  try {
    fetch(API_BASE_URL + "/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  } catch (error) {
    console.log(error);
  }
}

async function fetchUpdateUserData(
  token,
  userData: { fullname?: string; password?: string }
) {
  try {
    const respuesta = await fetch(API_BASE_URL + "/my-profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
      body: JSON.stringify(userData),
    });
    const result = await respuesta.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function fetchMyPets(token) {
  const respuesta = await fetch(API_BASE_URL + "/get-my-pets", {
    method: "GET",
    headers: {
      Authorization: "bearer " + token,
    },
  });
  const result = await respuesta.json();
  return result;
}

async function fetchCreatePet(token: string, petData: object) {
  console.log("Desde el fecth", petData);
  try {
    const respuesta = await fetch(API_BASE_URL + "/post-pet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
      body: JSON.stringify(petData),
    });
    const result = await respuesta.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function fetchUpdatePet(token: string, petData: object) {
  try {
    const respuesta = await fetch(API_BASE_URL + "/update-pet", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
      body: JSON.stringify(petData),
    });
    const result = await respuesta.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function fetchDeletePet(token: string, pet_id: number) {
  try {
    const respuesta = await fetch(API_BASE_URL + "/delete-pet/" + pet_id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
    });
    const result = await respuesta.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchPetsAround,
  fetchUserId,
  fetchUserToken,
  fetchSetUserData,
  fetchUpdateUserData,
  fetchMyPets,
  fetchCreatePet,
  fetchUpdatePet,
  fetchDeletePet,
};
