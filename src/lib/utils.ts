import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Note } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const localKey = import.meta.env.VITE_LOCAL_STORAGE_KEY

/* db */
export function create(note: Note) {
  const notes = localStorage.getItem(localKey);
  if (notes) {
    const notesArray = JSON.parse(notes);
    notesArray.push(note);
    localStorage.setItem(localKey, JSON.stringify(notesArray));
  } else {
    const notesArray = [note];
    localStorage.setItem(localKey, JSON.stringify(notesArray));
  }
}

export function get(id: string) {
  const notes = localStorage.getItem(localKey);
  if (notes) {
    const notesArray = JSON.parse(notes);
    const note = notesArray.find((note: Note) => note.id === id);
    return note;
  }
}

export function remove(id: string) {
  const notes = localStorage.getItem(localKey);
  if (notes) {
    const notesArray = JSON.parse(notes);
    const noteIndex = notesArray.findIndex((note: Note) => note.id === id);
    notesArray.splice(noteIndex, 1);
    localStorage.setItem(localKey, JSON.stringify(notesArray));
  }
}
export function getAll() {
  const notes = localStorage.getItem(localKey);

  if (notes) return JSON.parse(notes);
  return null;
}
