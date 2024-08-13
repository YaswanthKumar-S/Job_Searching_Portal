
import { Banner, Categories, Footer, RecentUpdates, SearchBox, SiteStats, TopRecruiters } from "../Home/Home";

const MergePages = () => {
  return (
    <div>
        <Banner />
        <SearchBox />
        <TopRecruiters />
        <Categories />
        <RecentUpdates />
        <SiteStats />
        <Footer />
    </div>
  );
};

export default MergePages;
