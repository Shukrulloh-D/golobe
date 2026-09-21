import { FlightHero } from "./components/flight-hero/flight-hero";
import { SearchBox } from "pages/landing/components/search-box/search-box";
import { LetsGoPlaces } from "./components/lets-go-places/lets-go-places";
import { FallIntoTravel } from "./components/fall-into-travel/fall-into-travel";
import { BackpackingSriLanka } from "./components/backpacking-sri-lanka/backpacking-sri-lanka";
import { SubscribeNewsletter } from "features/subscribe-newsletter";
import styles from "./flight-search.module.css";

export const FlightSearchPage = () => (
  <div className={styles.page}>
    <FlightHero />
    <div className={styles.container} style={{ position: "relative" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "-80px auto 0",
          padding: "0 40px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <SearchBox />
      </div>
    </div>
    <LetsGoPlaces />
    <FallIntoTravel />
    <BackpackingSriLanka />
    <SubscribeNewsletter />
  </div>
);
