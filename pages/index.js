import React from "react";

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from "./components/header";
import ProductList from "./components/ProductList";

function Index() {
  const products = [
    {
      url: "https://www.pluralsight.com/",
      image:
        "https://mumbrella.com.au/wp-content/uploads/2020/01/Pluralsight-e1578358955547.png",
      description: "Join PluralSight for #FREEapril",
      tags: ["learning"],
    },
    {
      url:
        "https://www.theverge.com/2020/3/16/21181915/synth-apps-free-moog-korg-kaossilator-minimoog-model-d-coronavirus",
      image:
        "https://cdn10.bigcommerce.com/s-6n1vp2/products/1973/images/6493/111__93691.1549410235.1280.1280.jpg?c=2",
      description:
        "Moog and Korg are offering synth apps for free while we’re all stuck at home",
      tags: ["music", "mobile app"],
    },
    {
      url: "https://www.leveluptutorials.com/",
      image:
        "https://pbs.twimg.com/profile_images/2106132366/leveluptuts-square-medium_400x400.png",
      description:
        "Scott Tolinksi's web dev courses and the yearly subscription (Level Up Pro) 50% off",
      tags: ["learning"],
    },
    {
      url:
        "https://www.metopera.org/user-information/nightly-met-opera-streams/",
      image:
        "https://www.metopera.org/globalassets/user-information/nightly-opera-streams/week-5/rus-1600x685.jpg",
      description: "Free Nightly Met Opera Streams",
      tags: ["entertainment"],
    },
    {
      url:
        "https://www.theverge.com/2020/4/2/21204243/nikon-free-photography-classes-april",
      image:
        "https://cdn.vox-cdn.com/thumbor/KHBb41S_1wTDzIkrAMyK0v-YeDk=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66593046/cwelch_180808_2891_3797.0.jpg",
      description:
        "Nikon is offering free online photography classes for all of April",
      tags: ["photography", "learning"],
    },
    {
      url:
        "https://www.businessinsider.com/coursera-yale-science-of-wellbeing-free-course-review-overview",
      image:
        "https://i.insider.com/5ca4d785c6cc505a7e73606b?width=700&format=jpeg&auto=webp",
      description:
        "Yale University is offering a free course online, The Science of Well-Being, that teaches you how to be happier.",
      tags: ["learning"],
    },
    {
      url: "https://store.unity.com/#plans-individual",
      image:
        "https://www.gamasutra.com/db_area/images/news/2020/Mar/360110/CGKUrcD9_400x400.jpg",
      description:
        "Unity offers up free game dev courses and tutorials during pandemic",
      tags: ["learning", "coding"],
    },
    {
      url:
        "https://www.timeout.com/newyork/news/you-can-now-download-over-300-000-books-from-the-nypl-for-free-031820",
      image: "https://media.timeout.com/images/100451549/750/422/image.jpg",
      description:
        "You can now download over 300,000 books from the NYPL for free",
      tags: ["learning", "books"],
    },
    {
      url:
        "https://movieweb.com/levar-burton-read-to-families-free-book-catalog/",
      image:
        "https://cdn3.movieweb.com/i/article/kjeOBNjT9WdYMq1yjGaj1h3Gl1rGNT/798:75/Levar-Burton-Read-To-Families-Free-Book-Catalog.jpg",
      description:
        "Reading Rainbow Host LeVar Burton Wants to Read to Families for Free",
      tags: ["learning", "books"],
    },
    {
      url:
        "https://www.silive.com/entertainment/2020/03/during-coronavirus-crisis-fender-is-offering-free-online-guitar-lessons-for-3-months-to-first-100000-people.html",
      image:
        "https://www.silive.com/resizer/6KYhMRGrwQd1j723icwzc_UC1vk=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/PPQPEAC4L5GOFFMO7ZDEXTA46M.jpg",
      description:
        "During coronavirus crisis, Fender is offering free online guitar lessons for 3 months to first 100,000 people",
      tags: ["music", "learning"],
    },
  ];
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
      <ProductList products={products} />
    </ThemeProvider>
  );
}

export default Index;
