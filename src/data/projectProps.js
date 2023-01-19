import MLLImg from "../img/mylocallocals.png"
import TenCTImg from "../img/10CT.png"
import JavascriptLogo from "../img/logos/javascriptLogo.png"

const ProjectProps = {
  "mllProps": 
  {
    "projectTitle": "My Local Locals",
    "siteURL": "https://my-local-locals.vercel.app",
    "mainLanguage": "Javascript",
    "mainLanguageImg": JavascriptLogo,
    "projectImgSrc": MLLImg, 
    "summary": "A browser app that allows competitors in platform fighting video games (such as Super Smash Brothers) to search for tournaments near a searched address.",
    "summaryExtended": "",
    "projectInfo": {
      "details": [
        {
          "sectionTitle": "Details",
          "listItems": [
            "Searches for upcoming tournaments using Google Maps API & Start.GG's GraphQL API",
            "Display all tournaments from search result in a scrollable list",
            "Filter results by game, date, or distance from searched address",
            "Show details of tournament on selection, including date, location, and all events",
            "Sort tournament search results by either date or distance from searched address"
          ]
        }
      ],
      "tools": [
        {
          "sectionTitle": "Languages",
          "listItems": ["Javascript", "CSS", "HTML", "GraphQL"]
        },
        {
          "sectionTitle": "Frameworks/Libraries/Interfaces",
          "listItems": [
            "React.js",
            "Next.js",
            "ApolloClient",
            "Start.GG API",
            "Google Maps API",
            "Bootstrap"
          ]
        },
        {
          "sectionTitle": "Packages/Plugins/Tools",
          "listItems": [
            "react-dom",
            "react-geocode",
            "react-scripts",
            "react-datepicker",
            "google-map-react",
            "@react-google-maps/api"
          ]
        }
      ],
      "changes": [
        {
          "sectionTitle": "Version beta v0.2",
          "listItems": [
                          "Overall redesign of every component",
                          "Improved responsive mobile design",
                          "Added more games to game filters (Rivals of Aether, Multiversus, Nickelodeon All-Stars Brawl)",
                          "Added an option to sort tournament results by time or by distance from searched location",
                          "Expanded distance search filter to 100 miles",
                          "Added a 'Before Date' filter",
                          "Displays the distance each tournament is from the search results",
                          "Added a background",
                      ]
        },
        {
          "sectionTitle": "Version beta v0.1",
          "listItems": [
                        "Added searchbar with radius, date, and game filters",
                        "Connect to Smash.GG's API to receive all the data relevant to user's search",
                        "Added Google geolocation services to allow user to use current location for search",
                        "Added expandable list of tournaments with details",
                        "Added a Google Maps window that respond to a click on a tournament by displaying the tournament's location (desktop view only)",
                        "Added basic responsive design between mobile and desktop views"
                      ]
        }
      ]
    }
  },

"tenCTProps": {
  "projectTitle": "10CTControllers",
  "siteURL": "https://10ctcontrollers.com",
  "mainLanguage": "Javascript",
  "mainLanguageImg": JavascriptLogo,
  "projectImgSrc": TenCTImg,
  "summary":
    "A website made for 10CT Controllers, a business that modifies Nintendo Gamecube controllers for competitors in Super Smash Brothers Melee.",
  "summaryExtended":"10CTControllers provides modification & repair services for competitors looking for the",
  "projectInfo": {
      "details": [
      {
        "sectionTitle": "Details",
        "listItems": [
          "Home hero section with a smooth slideshow carousel, highlighting business products and environment",
          "Fluid transitions between pages using HashRouters from react-router-dom",
          "Displays list of modifications with tooltips that display descriptions and images on hover",
          "Interactive FAQ page that displays answers to questions on click",
          "Twitter testimonial slideshow autoplays at bottom of webpage"
        ]
      }
    ],
    "tools": [
      {
        "sectionTitle": "Languages",
        "listItems": ["Javascript", "CSS", "HTML"]
      },
      {
        "sectionTitle": "Frameworks/Libraries/Interfaces",
        "listItems": ["React.js", "react-twitter-embed"]
      },
      {
        "sectionTitle": "Packages/Plugins/Tools",
        "listItems": [
          "react-dom",
          "react-router-dom",
          "react-scripts",
          "react-slideshow-image",
          "react-tooltip",
          "@react-google-maps/api"
        ]
      }
    ],
    "changes": [
      {
        "sectionTitle": "Version v1.0",
        "listItems": [
                      "Added a slideshow background for the welcome hero section with pictures featuring the business and their products",
                      "Transparent navigation bar with links to separate shop site & redirects to social media",
                      "Twitter testimonial slideshow section at bottom of page with positive reviews for business",
                      "Added a page that lists every available modification service provides with prices, along with tooltips that appear on hover with descriptions and images",
                      "Interactive FAQ page that reveals the answer to a selected question on click",
                  ]
      }
    ]
  }
}
}

export default ProjectProps;  