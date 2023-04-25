<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/VLykanZ/Google-SolutionChallenge-2023">
    <img src="src/assets/images/banner.png" alt="Logo" height="80">
  </a>

  <h3 align="center">FlexMind - Google Solution Challenge 2023</h3>

  <p align="center">
    The web-application to instruct people how to do an Office Syndrome Stretching by using AI!
    <br />
    <a href="https://github.com/VLykanZ/Google-SolutionChallenge-2023"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/VLykanZ/Google-SolutionChallenge-2023">View Demo</a>
    ·
    <a href="https://github.com/VLykanZ/Google-SolutionChallenge-2023/issues">Report Bug</a>
    ·
    <a href="https://github.com/VLykanZ/Google-SolutionChallenge-2023/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Home Screen Shot][home-screenshot]
![Diagnose Screen Shot][diagnose-screenshot]
![Exercise List Screen Shot][exerciselist-screenshot]


Our Application has a function that user can select the bodypart for example Neck & Shoulder, Back, Wrist & Arm. We have user's behavior diagnose to estimate user's risk to be an Office Syndrome. Then we will show the stretching exercise list to user.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SDG -->
## SGD Goal

![sdg-3.4][sdg-3.4]

Our team has chosen United Nations' Sustainable Development Goal 3: Good Health and Well-being for our solution. Specifically, we aim to address target 3.4, which is to reduce premature mortality from non-communicable diseases (NCDs) through prevention and treatment and promote mental health and well-being.

We were inspired to choose this goal and target because of the increasing prevalence of office syndrome, which is a non-communicable disease that can lead to premature mortality if not addressed. We believe that our solution can contribute to reducing the burden of NCDs and promoting better health and well-being among individuals who work from home. Additionally, with the COVID-19 pandemic highlighting the importance of remote work, our solution can have a significant impact on improving the health and well-being of remote workers worldwide.



<!-- Built -->
## Built With

We used React and Tensorflow.js as Frontend and we used Firestore and Express.js as backend. after that we had deployed our web-application by using Google Cloud App Engine.

* [![React][React.js]][React-url]
* [![TensorFlow][TensorFlow]][TensorFlow-url]
* [![Firebase][Firebase]][Firebase-url]
* [![Express.js][Express.js]][Express.js-url]
* [![Google Cloud][Google Cloud]][Google Cloud-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/VLykanZ/Google-SolutionChallenge-2023.git
   ```
2. Start the Project
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

![Do Exercise Screen Shot][doexercise-screenshot]

We had used Tensorflow Movenet to detect user's body and scoring user's stretching and we will calculated with diagnose score to estimated risk of user to be an Office Syndrome. Then we will show the recommendation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

Suphawit Chomsomsa  : Suphawish707@gmail.com

GDSC TU : https://gdsc.community.dev/thammasat-university/

Project Link: [https://github.com/VLykanZ/Google-SolutionChallenge-2023](https://github.com/VLykanZ/Google-SolutionChallenge-2023)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Preventing Office Syndrome While Working From Home](https://www.bangkokhospital.com/en/content/work-from-home-and-office-syndrome)
* [Myofascial pain syndrome (Office Syndrome](https://www.praram9.com/en/officesyndrome/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/VLykanZ/Google-SolutionChallenge-2023.svg?style=for-the-badge
[contributors-url]: https://github.com/VLykanZ/Google-SolutionChallenge-2023/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/VLykanZ/Google-SolutionChallenge-2023.svg?style=for-the-badge
[forks-url]: https://github.com/VLykanZ/Google-SolutionChallenge-2023/network/members
[stars-shield]: https://img.shields.io/github/stars/VLykanZ/Google-SolutionChallenge-2023.svg?style=for-the-badge
[stars-url]: https://github.com/VLykanZ/Google-SolutionChallenge-2023/stargazers
[issues-shield]: https://img.shields.io/github/issues/VLykanZ/Google-SolutionChallenge-2023.svg?style=for-the-badge
[issues-url]: https://github.com/VLykanZ/Google-SolutionChallenge-2023/issues
[license-shield]: https://img.shields.io/github/license/VlykanZ/Google-SolutionChallenge-2023.svg?style=for-the-badge
[license-url]: https://github.com/VLykanZ/Google-SolutionChallenge-2023/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/suphawit-chomsomsa-a461961b4/

[sdg-3.4]: https://ittffoundation.org/files/cms/logos/unsdgs/un-sdgs/sdg-3_target-3.4_%20same%20size.png

[home-screenshot]: src/assets/images/readme/home.png
[diagnose-screenshot]: src/assets/images/readme/diagnose.png
[exerciselist-screenshot]: src/assets/images/readme/exerciselist.png
[doexercise-screenshot]: src/assets/images/readme/doexercise.png


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TensorFlow]: https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white
[TensorFlow-url]: https://www.tensorflow.org/
[Firebase]: https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white
[Firebase-url]: https://firebase.google.com/
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
[Google Cloud]: https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white
[Google Cloud-url]: https://cloud.google.com
