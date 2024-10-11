# HTML Unordered List Analyzer

This script finds the unordered list (`<ul>`) with the most direct list item (`<li>`) children from either a local HTML file or a web page URL.

## Prerequisites

Before you can run this script, make sure you have:

-   [Node.js > v20.15.1](https://nodejs.org) installed on your machine.

## Installation

1. Clone this repository or download the script.

2. Navigate to the directory where the script is located.

## Usage

### Fetch HTML from a URL

You can run the script and provide a web page URL as a command-line argument:

```bash
npm start https://example.com
```

### Run script for HTML local file

You can create index.html and provide path as a command-line argument:

```bash
npm start ./index.html
```
