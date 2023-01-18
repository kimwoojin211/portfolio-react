import MLLImg from "../img/mylocallocals.png"
import TenCTImg from "../img/10CT.png"
import JavascriptLogo from "../img/logos/javascriptLogo.png"

const projectProps = {
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
          "sectionTitle": "Version v0.0.1",
          "listItems": ["Added a background"]
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
  "summaryExtended": "",
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
        "sectionTitle": "Version v0.0.1",
        "listItems": ["Added a background"]
      }
    ]
  }
}
}

export default projectProps;  