import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  if (!inputs || inputs.length === 0) return "";

  return twMerge(clsx(inputs));
}

/**
 * Converts a string to kebab-case.
 *
 * Kebab case is lowercase words separated by hyphens.
 * Example: "Hello World" -> "hello-world"
 *
 * @param str - The input string to convert.
 * @returns The kebab-cased string.
 */
export function toKebabCase(str: string): string {
  if (typeof str !== "string" || !str) return "";

  // Replace camelCase with hyphens
  let kebab = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  // Replace all non-alphanumeric characters (including parentheses, punctuation, etc.) with hyphens
  kebab = kebab.replace(/[^a-zA-Z0-9]+/g, "-");
  // Remove leading/trailing hyphens and lowercase
  return kebab.replace(/^-+|-+$/g, "").toLowerCase();
}

/**
 * Converts a string to Title Case.
 *
 * - Hyphens and multiple spaces are treated as word separators.
 * - Each word's first letter is capitalized; the rest are lowercased.
 *
 * Examples:
 *   toTitleCase("hello-world")         -> "Hello World"
 *   toTitleCase("multi--word_string")  -> "Multi Word String"
 *   toTitleCase("  messy-input  text") -> "Messy Input Text"
 *
 * @param {string} str - The input string to convert.
 * @returns {string} - The Title Case version of the string.
 */
export function toTitleCase(str: string) {
  if (typeof str !== "string" || !str) return "";

  return str
    .replace(/[-_]+/g, " ") // convert hyphens and underscores to spaces
    .toLowerCase()
    .trim()
    .split(/\s+/) // split on one or more spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Converts a timestamp (ISO 8601, UNIX seconds, or UNIX ms) to a human-readable creation time.
 *
 * Rules:
 * - < 1 hour   → "Created X minutes ago"
 * - < 24 hours → "Created X hours ago"
 * - < 7 days   → "Created X days ago"
 * - ≥ 7 days   → "Created DD/MM/YYYY"
 *
 * @param {string|number} input - The timestamp (ISO string, UNIX in seconds or ms).
 * @returns {string} - A human-readable description of the creation time.
 */
export function formatCreationTime(input: string) {
  if (input === null || input === undefined || input === "") return "Unknown";

  let timestamp;

  // Handle input types
  if (typeof input === "string") {
    const parsed = Date.parse(input);
    if (isNaN(parsed)) return "Unknown";
    timestamp = parsed;
  } else if (typeof input === "number") {
    timestamp = input > 1e12 ? input : input * 1000; // millis vs seconds
  } else {
    return "Unknown";
  }

  const now = Date.now();
  const diffMs = now - timestamp;

  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    return `Identified ${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `Identified ${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (days < 7) {
    return `Identified ${days} day${days !== 1 ? "s" : ""} ago`;
  } else {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `Identified on ${day}/${month}/${year}`;
  }
}

/**
 * Converts an ISO 8601 date string to "DD/MM/YYYY HH:mm:ss" format.
 *
 * Example:
 *   isoToDateTime("2025-06-17T01:00:49Z") // "17/06/2025 01:00:49"
 *
 * @param isoString - The ISO 8601 date string.
 * @returns The formatted date and time string.
 */
export function isoToDateTime(isoString: string): string {
  if (!isoString) return "";

  const date = new Date(isoString);
  if (isNaN(date.getTime())) return "";

  const pad = (n: number) => n.toString().padStart(2, "0");

  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

/**
 * Returns the corresponding Tailwind CSS class names for a given severity level.
 *
 * @param severity - The severity level as a string. Supported values are "major" and "significant".
 * @returns The Tailwind CSS class names for background and text color based on severity,
 *          or `undefined` if the severity does not match any known case.
 */
export const getTypeVariant = (severity: string) => {
  if (!severity) return undefined;

  switch (toKebabCase(severity)) {
    case "major-outage":
      return "bg-red-100 text-red-900";

    case "significant-local-outage--regional-":
      return "bg-amber-200 text-amber-900";

    case "significant-local-outage--remote-":
      return "bg-amber-200 text-amber-900";

    default:
      return "bg-gray-100 text-gray-900";
  }
};
