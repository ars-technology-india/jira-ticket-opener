# Jira Ticket Opener - Chrome Extension

Jira Ticket Opener is a simple Chrome extension that allows users to quickly open Jira tickets by entering the ticket number. The extension provides an easy way to configure the board URL and board code, making it convenient to navigate Jira tickets efficiently.

## Features
- Configure Jira board URL and board code on first use.
- Enter a ticket number and open it instantly in Jira.
- Reset configuration anytime using the reset button.

## Installation
1. Download or clone this repository:
   ```sh
   git clone https://github.com/ars-technology-india/jira-ticket-opener.git
   ```
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle switch in the top right corner).
4. Click **Load unpacked** and select the cloned repository folder.
5. The extension will be installed and available in the extensions menu.

## Usage
1. Click on the extension icon to open the popup.
2. On first use, configure:
   - **Jira Board URL** (e.g., `https://yourcompany.atlassian.net/browse/`)
   - **Board Code** (e.g., `PROJ` for `PROJ-123` tickets)
3. Enter a ticket number (e.g., `123`) and click **Open Ticket**.
4. The ticket page (`https://yourcompany.atlassian.net/browse/PROJ-123`) will open in a new tab.
5. Click the **Reset** button to clear the configuration and start over.

## Contributing
Contributions are welcome! If you'd like to improve this extension, feel free to fork the repository, make changes, and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support
If you encounter any issues or have suggestions for improvements, please open an issue in the repository.

---

Made with ❤️ by [ARS Technology India](https://github.com/ars-technology-india)

