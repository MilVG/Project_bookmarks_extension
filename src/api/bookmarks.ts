
// src/api/bookmarks.ts
import axios from "axios";
import { bookmarkSchema } from "../schema/bookmarkSchema";

const API_URL = "http://localhost:3000/bookmarks"; // coloca la correcta

export const postBookmark = async (data: unknown) => {
  const parsed = bookmarkSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Datos inválidos");
  }

  const response = await axios.post(API_URL, parsed.data);
  return response.data;
};
