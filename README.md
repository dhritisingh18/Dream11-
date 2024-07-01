Dream11 Team Selection Project
Overview
Welcome to the Dream11 Team Selection project! This project is designed to help you create the best possible team for the IPL season without the stress of manual selection. Using advanced algorithms, the project selects the top players across all four fields—Wicket Keeping, Batting, All Rounders, and Bowlers—while maintaining the optimal credit score utilization. The maximum credit score is 100, and players must be chosen within the limitations of the number of players allowed in each specialized field. This ensures that no field is neglected and you get the best possible team to enhance your chances of winning.

Features
Automated Team Selection: The project automates the process of selecting the best players using Selenium for web scraping and automation.
Optimal Credit Score Utilization: Ensures the team is selected within the 100 credit score limit.
Balanced Team Composition: Adheres to the limitations of choosing the number of players in each specialized field.
Winning Strategy: Maximizes the potential for a win-win situation by selecting top-performing players.
Technology Stack
Programming Language: JavaScript
Automation Tool: Selenium WebDriver
Node.js Packages: selenium-webdriver, axios
Others: cheerio for web scraping (optional)
Setup Instructions
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/dream11-team-selection.git
cd dream11-team-selection
Install Dependencies:

bash
Copy code
npm install
Download WebDriver:
Download the appropriate WebDriver for your browser (ChromeDriver for Chrome, GeckoDriver for Firefox, etc.) and ensure it is in your PATH.

Run the Script:

bash
Copy code
node teamSelection.js
Usage
Configuration:

Update the config.json file with the required parameters such as the Dream11 URL, login credentials, and any other necessary configurations.
Automation Process:

The script uses Selenium WebDriver to navigate to the Dream11 website, log in with the provided credentials, and scrape the necessary data for player statistics.
It then processes this data to select the best players across the four fields while maintaining the credit score limitation.
Result:

The selected team is displayed in the console or saved to a file as per the configuration.
Contribution
We welcome contributions to enhance the project. Feel free to open issues or submit pull requests on GitHub.

Acknowledgements
I would like to extend my gratitude to:

Bhavesh Bansal Sir for his utmost guidance.
Sumeet Malik Sir for providing the opportunity to participate in the Hackathon hosted by PepCoding.
