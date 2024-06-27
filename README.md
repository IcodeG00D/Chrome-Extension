# Voice Tab Switcher

![Icon](images/icon128.png)

## Overview

Voice Tab Switcher is a Chrome extension that allows seamless tab navigation using voice commands. With this extension, you can switch to the next or previous tab by simply speaking commands like "Change next" and "Change back". This enhances productivity by minimizing the need for manual tab management.

## Features

- **Voice Commands**: Switch tabs using voice prompts.
- **Easy Navigation**: Navigate through tabs without using the mouse or keyboard.
- **User-Friendly**: Simple and intuitive interface.

## Technologies Used

- **JavaScript**: Core scripting language for the extension.
- **HTML & CSS**: Markup and styling for the popup interface.
- **Chrome APIs**: Utilizes Chrome's `tabs`, `activeTab`, and `scripting` APIs.

## Installation

1. **Download or Clone the Repository**:
    ```sh
    https://github.com/IcodeG00D/Chrome-Extension.git
    ```
2. **Open Chrome Extensions Page**:
    - Navigate to `chrome://extensions/`.
    - Enable Developer mode by toggling the switch at the top right.
3. **Load Unpacked Extension**:
    - Click on "Load unpacked".
    - Select the `VoiceTabSwitcher` directory.

## Usage

1. **Activate the Extension**:
    - Click on the Voice Tab Switcher icon in the Chrome toolbar.
2. **Give Voice Commands**:
    - Say "Change next" to move to the next tab.
    - Say "Change back" to move to the previous tab.

## File Structure

VoiceTabSwitcher/
│
├── background.js
├── manifest.json
├── popup.html
├── images/
│ ├── icon16.png
│ ├── icon48.png
│ └── icon128.png
│
├── popup.js
├── popup.css
├── content-script.js
├── LICENSE.txt
└── README.md
