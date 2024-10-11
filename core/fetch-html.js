import { fetchHTMLFromFile } from "./fetch-html-from-file.js";
import { fetchHTMLFromURL } from "./fetch-html-from-url.js";

// Function to fetch HTML content from a URL or file
export async function fetchHTML(pageUrlOrFile) {
    const isHttps = pageUrlOrFile?.startsWith("https://");
    const isHttp = pageUrlOrFile?.startsWith("http://");
    const isURL = isHttps || isHttp;

    if (isURL) {
        return await fetchHTMLFromURL(pageUrlOrFile);
    }

    return await fetchHTMLFromFile(pageUrlOrFile);
}
