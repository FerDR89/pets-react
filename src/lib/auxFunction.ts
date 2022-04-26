export function checkPetData(data) {
  console.log("Dentro de check", { data });

  const petData = {};
  if (data.fullname !== undefined && data.fullname !== "") {
    petData["fullname"] = data.fullname;
  }
  if (data.imgURL !== undefined) {
    petData["imgURL"] = data.imgURL;
  }
  if (data.newPetCoords !== undefined && data.newPetCoords !== "") {
    petData["lost_geo_lat"] = data.newPetCoords[1];
    petData["lost_geo_lng"] = data.newPetCoords[0];
  }
  if (data.place_lost !== undefined && data.place_lost !== "") {
    petData["place_lost"] = data.place_lost;
  }
  if (data.id) {
    petData["pet_id"] = data.id;
  }

  console.log("petData desde la funcion que chequea", petData);

  return petData;
}
