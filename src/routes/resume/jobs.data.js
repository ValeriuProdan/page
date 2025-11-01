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
    Title: "AI/ML Engineer - Google Search Shopping",
    Duration: "February 2022 - Present",
    Details: [
      "Developed a RAG system to generate LLM-based product summaries for shopping queries in AI Overviews, streamlining user navigation and boosting engagement.",
      "Trained and launched a LoRA adapter for shopping products, enabling efficient fine-tuning of the LLM to deliver faster, more relevant product summaries while reducing TPU consumption by 48%.",
    ],
  },
  {
    Company: "Google",
    Logo: GoogleLogo,
    LogoToLink: "https://www.google.com",
    Title: "Software Engineer - YouTube Ads",
    Duration: "February 2022 - Present",
    Details: [
      "Pioneered the implementation, validation, and successful launch of Target Frequency, a game-changing feature empowering advertisers to set weekly ad exposure targets. This initiative resulted in a remarkable revenue surge, surpassing $200M in its inaugural year in 2023 and $0.5B in 2024.",
      "Innovated by introducing the Reserve Target Frequency product in YouTube. This new offering seamlessly integrates premium reserve benefits with a frequency guarantee, revolutionizing user engagement, and generating $15M in its first year.",
      "Effectively leveraged C++, Python, SQL, and internal frameworks to power these impactful innovations.",
    ],
  },
  {
    Company: "UiPath",
    Logo: UiPathLogo,
    LogoToLink: "https://www.uipath.com/",
    Title: "Software Engineer",
    Duration: "July 2020 - February 2022",
    Details: [
      "Elevated to the role of lead for the system activities package, where I spearheaded the creation of new activities, maintained existing ones, and resolved bugs, providing effective guidance to a team of three. Leveraging technologies such as C# and WPF, we ensured the seamless functioning of critical system components.",
      "Engineered rule checkers for the Studio product, introducing a sophisticated mechanism to analyze user workflows. This innovation effectively identified errors and warnings in code, resulting in a significant reduction in post-publishing bugs.",
      "Pioneered the conceptualization and implementation of impactful features, driving substantial efficiency gains. These enhancements not only streamlined operations but also translated into time savings of over 1000 hours per month for each customer, underscoring a commitment to delivering substantial value.",
    ],
  },
  {
    Company: "Microsoft",
    Logo: MicrosoftLogo,
    LogoToLink: "https://www.microsoft.com/",
    Title: "Technical Engineering Intern",
    Duration: "April 2020 - June 2020",
    Details: [
      "Expertly tackled challenges within Microsoft Teams stemming from a surge in new users during the pandemic lockdown, swiftly resolving issues to ensure seamless functionality.",
      "Empowered clients by swiftly addressing and remedying application-related issues, ultimately saving them valuable time and facilitating uninterrupted business operations.",
    ],
  },
  {
    Company: "Amiq Consulting",
    Logo: AmiqLogo,
    LogoToLink: "https://www.amiq.com/",
    Title: "Software Engineer",
    Duration: "July 2019 - April 2020",
    Details: [
      "Led the design and implementation of comprehensive analytics dashboards for regressions, providing crucial statistical insights into the development status of the internal team. Leveraging Python, Elasticsearch, and Kibana, I initiated this project from the ground up, ensuring accurate and insightful data representation.",
      "Innovatively crafted scenarios in M-SDL (Measurable Scenario Description Language) to rigorously test and assess the behavior of autonomous vehicles.",
    ],
  },
  {
    Company: "4PSA",
    Logo: FourPSALogo,
    LogoToLink: "https://www.4psa.com/",
    Title: "Part-time Software Engineer",
    Duration: "October 2018 - January 2019",
    Details: [
      "Engineered an efficient solution for legacy C functions, seamlessly transitioning from traditional file-based operations to streamlined streams input/output. This innovative approach significantly slashed the overhead associated with inter-process communication, enhancing efficiency and modernizing the functionality of the system.",
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
