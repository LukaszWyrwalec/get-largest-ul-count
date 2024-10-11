import { fetchHTML } from "./core/fetch-html.js";
import { findLargestUnorderedList } from "./core/find-largest-unordered-list.js";

// Main function to execute the script
async function main() {
    const pageUrlOrFile = process.argv[2];

    if (!pageUrlOrFile) {
        console.error(
            "Please provide a URL or file path as a command-line argument."
        );
        process.exit(1);
    }

    try {
        const htmlContent = await fetchHTML(pageUrlOrFile);
        const largestListCount = findLargestUnorderedList(htmlContent);

        console.log(
            `The unordered list with the most direct children has ${largestListCount} items.`
        );
        process.exit(0);
    } catch (error) {
        console.error("Error:", error.message);
        process.exit(1);
    }
}

main();
