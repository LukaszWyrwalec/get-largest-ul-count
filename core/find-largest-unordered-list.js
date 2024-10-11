// Function to find the largest unordered list (<ul>) in an HTML string
// It counts the number of <li> elements inside each <ul> and returns the maximum found
export function findLargestUnorderedList(html) {
    let tagName = ""; // To accumulate the current tag's name
    let maxItems = 0; // To store the maximum number of <li> items in any <ul>
    const stack = []; // Stack to keep track of <ul> levels and their item counts

    // Loop through each character in the HTML string
    for (let i = 0; i < html.length; i++) {
        const char = html[i];

        // When encountering '<', start building a tag name
        if (char === "<") {
            tagName = ""; // Reset tagName for the next tag
        }

        // Continue building the tag name (ignore '<' and '>')
        if (char !== "<" && char !== ">") {
            tagName += char;
        }

        // When encountering '>', process the completed tag name
        if (char === ">") {
            tagName = tagName.trim().toLowerCase(); // Clean and standardize the tag name

            // If a <ul> tag is found, push a counter (0) onto the stack for counting <li> items
            if (tagName.startsWith("ul")) {
                stack.push(0);
            }

            // If a closing </ul> tag is found, pop the stack and check if it's the largest list
            if (tagName.startsWith("/ul")) {
                const itemsInCurrentUL = stack.pop(); // Get the item count of the current <ul>
                if (itemsInCurrentUL > maxItems) {
                    maxItems = itemsInCurrentUL; // Update maxItems if the current <ul> has more <li> elements
                }
            }

            // If an <li> tag is found, increment the topmost stack entry (current <ul>'s item count)
            if (tagName.startsWith("li")) {
                if (stack.length > 0) {
                    stack[stack.length - 1]++; // Increment the item count for the current <ul>
                }
            }
        }
    }

    return maxItems; // Return the maximum number of <li> items in any <ul> found
}
