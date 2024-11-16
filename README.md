# incognito-force-en

A Chrome extension that automatically appends `&hl=en` to Google searches in incognito mode, ensuring English search results while maintaining regular language preferences in normal browsing.

## Features

- 🕵️ Works exclusively in incognito mode
- 🔄 Automatically converts Google searches to English
- 🌐 Preserves your regular browsing language preferences
- 🚫 No data collection or external dependencies
- ⚡ Lightweight and efficient

## Installation

Since this extension isn't available on the Chrome Web Store, you'll need to install it manually:

1. Clone this repository:
   ```bash
   git clone https://github.com/gimmeursocks/incognito-force-en.git
   ```
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked"
5. Select the extension directory
6. Click the extension's "Details"
7. Allow in Incognito

## Usage

1. Open an incognito window in Chrome
2. The extension icon will become active (colored)
3. Perform Google searches as normal
4. All searches will automatically show results in English
5. Regular window searches remain unaffected

## How It Works

The extension uses Chrome's declarativeNetRequest API to modify Google search URLs in incognito mode only. When a Google search is performed in incognito mode, it automatically appends or updates the `&hl=en` parameter to ensure English results.

## Technical Details

- Built with Manifest V3
- Uses declarativeNetRequest for URL modifications
- Implements split incognito mode behavior

## License
Distributed under the MIT License. See LICENSE.txt for more information.