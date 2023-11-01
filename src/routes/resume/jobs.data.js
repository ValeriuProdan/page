import UiPathLogo from "../../assets/UiPathLogo.png";
import GoogleLogo from "../../assets/GoogleLogo.png";
import MicrosoftLogo from "../../assets/MicrosoftLogo.png";
import AmiqLogo from "../../assets/AmiqLogo.png";
import FourPSALogo from "../../assets/4PSALogo.png";
import VPLogo from "../../assets/VPLogo.jfif";

var JOBS_DATA = [
  {
    Company: "Google",
    Logo: GoogleLogo,
    LogoToLink: "https://www.google.com",
    Title: "Software Engineer",
    Duration: "Feb 2022 - Present",
    Details: [
      "Working in YouTube Ads delivering optimizations for the auction algorithms using C++.",
      "Implemented, validated and launched Target frequency, a feature which allows advertisers to set a target for the number of times an ad is shown to the same user each week, generating a revenue of 200M+ dollars in the first year.",
    ],
  },
  {
    Company: "UiPath",
    Logo: UiPathLogo,
    LogoToLink: "https://www.uipath.com/",
    Title: "Software Engineer",
    Duration: "July 2020 - Feb 2022",
    Details: [
      "Became the lead of an activities package, creating new activities, maintaining existing ones and fixing bugs, guiding a team of 2. The technologies used include C# and WPF.",
      "Proposed and implemented new features which saved each customers 1000+ hours of manual labor per month.",
      "Developed rule checkers for the Studio product which analyze the workflows of users to signal errors and warnings in their code reducing the number of bugs after publishing.",
    ],
  },
  {
    Company: "Microsoft",
    Logo: MicrosoftLogo,
    LogoToLink: "https://www.microsoft.com/",
    Title: "Technical Engineer Intern",
    Duration: "Apr 2020 - Jun 2020",
    Details: [
      "Resolved problems occurred in Microsoft Teams because of the big number of new users during the pandemic lockdown.",
      "Enabled clients to overcome issues encountered using the application saving them time for their businesses",
    ],
  },
  {
    Company: "AMIQ Consulting",
    Logo: AmiqLogo,
    LogoToLink: "https://www.amiq.com/",
    Title: "Software Engineer",
    Duration: "Jul 2019 - Mar 2020",
    Details: [
      "Designed and implemented from scratch new analytics dashboards for regressions delivering statistic data about the development status of the internal teams, using Python, Elasticsearch and Kibana.",
      "Created scenarios in M-SDL (Measurable Scenario Description Language) for testing autonomous vehicles behavior.",
    ],
  },
  {
    Company: "4PSA",
    Logo: FourPSALogo,
    LogoToLink: "https://www.4psa.com/",
    Title: "Software Engineer",
    Duration: "Oct 2018 - Jan 2019",
    Details: [
      "Developed a solution for old C functions to use streams input/output instead of reading from/writing to files reducing the overhead of communicating between processes.",
    ],
  },
  {
    Company: "Freelance",
    Logo: VPLogo,
    LogoToLink: "/",
    Title: "Web and App Developer",
    Duration: "Oct 2013 - Sep 2016",
    Details: [
      "Developed new features (windows and web application) in C# for a loaning software company based in USA.",
      "Features include dashboards for users to see the status of the loans, payment dialogs integrated in application, etc.",
    ],
  },
];

export default JOBS_DATA;
