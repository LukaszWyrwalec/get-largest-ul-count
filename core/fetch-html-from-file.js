import { promises as fs } from "fs";
import path from "path";

// Function to load HTML from a local file
export async function fetchHTMLFromFile(filePath) {
    if (path.extname(filePath).toLowerCase() !== ".html") {
        throw new Error("Invalid file type. Only HTML files are allowed.");
    }

    const data = await fs.readFile(filePath, "utf8");

    return data;
}
