import Unsplash, { toJson } from "unsplash-js";

export const unsplash = new Unsplash({
  applicationId:
    "77e468818760189a3e2cc4de344b09ea730c877275e1647429d29383bcad3e29",
  secret: "9bf614d7f1275683fbcd85b5e6f96b11c5da3c0de9f8f911b66f9abd4addd807",
  callbackUrl: "http://miminogram.ru/auth"
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);

export const setAccessTokenUnplash = code => {
  unsplash.auth
    .userAuthentication(code)
    .then(res => res.json())
    .then(json => localStorage.setItem("token", json.access_token));
};

export const listPhoto = (start, end, access_token) => {
  unsplash.auth.setBearerToken(access_token);

  return unsplash.photos
    .listPhotos(start, end, "latest")
    .then(res => res.json());
};

export const likePhoto = (id, token) => {
  unsplash.auth.setBearerToken(token);

  unsplash.photos
    .likePhoto(id)
    .then(toJson)
    .then(json => {
      console.log(json);
    });
};

export const unLikePhoto = (id, token) => {
  unsplash.auth.setBearerToken(token);

  unsplash.photos
    .unlikePhoto(id)
    .then(toJson)
    .then(json => {
      console.log(json);
    });
};
