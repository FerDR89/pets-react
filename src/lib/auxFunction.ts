export function checkPetData(data) {
  const petData = {};
  if (data.fullname) {
    petData["fullname"] = data.fullname;
  }
  if (data.imgURL) {
    petData["imgURL"] = data.imgURL;
  }
  if (data.petCoords) {
    petData["lost_geo_lat"] = data.petCoords[1];
    petData["lost_geo_lng"] = data.petCoords[0];
  }
  if (data.place_lost) {
    petData["place_lost"] = data.place_lost;
  }
  if (data.id) {
    petData["pet_id"] = data.petId;
  }

  return petData;
}
