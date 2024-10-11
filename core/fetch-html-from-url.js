import http from "http";
import https from "https";

// Function to fetch HTML content from the specified URL
export function fetchHTMLFromURL(url) {
    return new Promise((resolve, reject) => {
        const { protocol } = new URL(url);
        const library = protocol === "https:" ? https : http;

        library.get(url, (response) => {
            let htmlContent = "";

            response.on("data", (chunk) => {
                htmlContent = htmlContent + chunk;
            });

            response.on("end", () => {
                resolve(htmlContent);
            });

            response.on("error", (error) => {
                reject(error);
            });
        });
    });
}
