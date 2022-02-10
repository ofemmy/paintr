import { useEffect } from "react";
import localforage from "localforage";
const UNSPLASH_ACCESS_KEY = "Lxy1du6mSrZvxXj5YGsjerpygNAbfPq9HmzS-2WKX9c";
const UNSPLASH_BASE_URL = "https://api.unsplash.com";
export default async function usePhotos() {
  let photos;
  photos = await localforage.getItem("photos");
  console.log(photos);
  if (!photos) {
    console.log("Fetching over the network.....");
    const resp = await fetch(
      `${UNSPLASH_BASE_URL}/search/photos?page=1&query=faith`,
      {
        headers: {
          Authorization: "Client-ID " + UNSPLASH_ACCESS_KEY,
        },
      }
    );
    const { results } = await resp.json();
    photos = await localforage.setItem("photos", results);
  }
  return photos;
}
