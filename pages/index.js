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
      ur: "https://learn.masterclass.com/masterclasslive?",
      image:
        "https://i.pcmag.com/imagery/reviews/01z1Wiwp9R06Y8QrNB59ROo-4.fit_scale.size_1028x578.v_1569480565.jpg",
      description:
        "MasterClass Live is offering one free streaming class per week",
      tags: ["learning"],
    },
    {
      url: "https://www.digitalconcerthall.com/en/live",
      image: "https://images-na.ssl-images-amazon.com/images/I/51bs4gTHPZL.png",
      description:
        "Berliner Philharmoniker is offering its library of more than 600 performances for free when you use the code BERLINPHIL.",
      tags: ["entertainment", "music"],
    },
    {
      url: "https://www.apple.com/logic-pro/",
      image:
        "https://i.pinimg.com/originals/c0/66/b4/c066b4ff306f1ae970245a36fab14a52.png",
      description:
        "Apple is offering free 90-day trial to its music editing app",
      tags: ["music", "software"],
    },
    {
      url:
        "https://www.theverge.com/2020/3/16/21181915/synth-apps-free-moog-korg-kaossilator-minimoog-model-d-coronavirus",
      image:
        "https://cdn.vox-cdn.com/thumbor/qddoUUO-My0VeIVGOy9dUdUVYg4=/0x0:640x365/920x613/filters:focal(269x132:371x234):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66508573/dims.0.jpg",
      description:
        "Moog and Korg are offering synth apps for free while we’re all stuck at home",
      tags: ["music", "mobile app"],
    },
    {
      url: "https://www.leveluptutorials.com/",
      image:
        "https://thundernerds.io/wp-content/uploads/2016/03/scott.tolinski.jpg",
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
      tags: ["entertainment", "music"],
    },
    {
      url: "https://www.apple.com/final-cut-pro/trial/",
      image:
        "https://ttraining.mystagingwebsite.com/wp-content/uploads/2014/05/final-cut-pro-x1.jpg",
      description:
        "Apple is offering free 90-day trial to its video editing app",
      tags: ["video", "software"],
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
      tags: ["books"],
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
    {
      url:
        "https://www.scribd.com/?campaign=SkimbitLtd&ad_group=45704X1167592X4d1134d5ba0d3cfb74663b69f46c3a4d&keyword=660149026&source=hp_affiliate&medium=affiliate",
      image:
        "https://s30113.pcdn.co/wp-content/uploads/2019/11/p1dqkvfur910v171e3q8urd16h86.png",
      description:
        "Scribd e-books offering a free 30-day trial that gives you access to more than a million titles",
      tags: ["books"],
    },
    {
      url:
        "https://smile.amazon.com/kindle-dbs/hz/subscribe/ku?sa-no-redirect=1&*entries*=0&_encoding=UTF8&*Version*=1&shoppingPortalEnabled=true",
      image:
        "https://thebombaybibliophile.files.wordpress.com/2018/07/kindle-unlimited-logo-cropped-360x270.jpg?w=1086",
      description:
        "Two-month free subscription to Amazon’s Kindle Unlimited, which has a library stocked with more than a million free titles.",
      tags: ["books"],
    },
    {
      url: "https://gamepass.nfl.com/packages",
      image:
        "https://media.foxbusiness.com/BrightCove/854081161001/202002/1582/854081161001_6129184572001_6129186164001-vs.jpg",
      description:
        "Through May 31, the NFL is extending complimentary access to NFL Game Pass, which offers a library full of football programing and game replays",
      tags: ["entertainment", "sports"],
    },
    {
      url:
        "https://www.sling.com/deals/sling-free?AID=12103878&PID=5513721&SID=AwEAAAAAAAAAAbZT&cvosrc=affiliate.cj.5513721&adid=12103878&af=1&utm_medium=affiliate&utm_source=cj&utm_campaign=5513721&utm_content=12103878&cjevent=1927023181a211ea820f01950a1c0e10",
      image:
        "https://www.sling.com/content/dam/sling-tv/sling-logos/sling_logo_new.svg",
      description:
        "Sling TV is offering free access to select on-demand movies, television shows, and ABC News Live",
      tags: ["entertainment"],
    },
    {
      url: "https://www.purebarre.com/go",
      image:
        "https://www.zonarosa.com/wp-content/uploads/2020/01/ZR__0037_Pure-Barre.png",
      description:
        "Pure Barre studio is offering Pure Barre On Demand free for 30 days with code EXTENDEDTRIAL",
      tags: ["fitness", "health"],
    },
    {
      url: "https://www.facebook.com/planetfitness/",
      image:
        "https://www.stratfordcrossing.com/wp-content/uploads/2018/03/stratford_planet_fitness.jpg",
      description:
        "Planet Fitness is streaming live, at-home workouts for free on its Facebook page daily at 7pm EST",
      tags: ["fitness", "health"],
    },
    {
      ur: "https://app.aurahealth.io/redeem",
      image:
        "https://www.popsci.com/resizer/hhZUwY_qYywBmoCvRIAKbz0FOxY=/760x570/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VHLYLRJNWOLUB62ZVSFYPBNUJY.jpg",
      description:
        "Aura, a meditation app, is offering a free 3-month subscription when you use the code FINDPEACE2020",
      tags: ["health"],
    },
    {
      ur:
        "https://www.globenewswire.com/news-release/2020/03/25/2006613/0/en/Verizon-to-give-customers-learning-tools-and-premium-TV-at-no-additional-cost-to-assist-with-new-at-home-realities.html",
      image:
        "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2016/05/New-Logo.png",
      description:
        "Verizon is giving its customers access to online learning and study support like Quizful and Chegg",
      tags: ["learning"],
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
