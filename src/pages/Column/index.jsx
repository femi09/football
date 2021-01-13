import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";
import Hero from "./Hero";
import NewsCard from "./NewsCard";
import { getLatestNews } from "../../services/latestServices";
import SkeletonLatestNews from "../../components/Skeletons/Home/SkeletonNews";

const Column = () => {
  const [show, set] = useState(false);
  const [latestNews, setLatestNews] = useState([]);
  const [featuredNews, setFeaturedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setShow = () => {
      set(true);
    };
    setShow();
    const getNews = async () => {
      const { data: news } = await getLatestNews();
      let featuredNews = news[0];
      setFeaturedNews(featuredNews);
      let latestNews = news.filter((news) => news !== featuredNews);
      setLatestNews(latestNews);
      setLoading(false);
    };
    getNews();
  }, []);

  const transitions = useTransition(show, null, {
    config: config.slow,
    from: { opacity: 0, marginLeft: -200 },
    enter: { opacity: 1, marginLeft: 0 },
    leave: { opacity: 0 },
  });

  const contentProps = useSpring({
    from: { opacity: 0, marginTop: -200 },
    to: { opacity: 1, marginTop: 0 },
    config: config.slow,
  });
  return (
    <div className="container mx-auto my-2 lg:my-6">
      {loading && latestNews.length === 0 ? (
        <SkeletonLatestNews />
      ) : (
        <div className="sm:rounded-lg lg:w-2/3 xl:w-3/4 mx-auto">
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props} className="mb-4">
                  <Hero featuredNews={featuredNews} />
                </animated.div>
              )
          )}
          <animated.div style={contentProps}>
            <div className="px-2 sm:mx-2 sm:px-0 sm:bg-gray-200 sm:grid sm:grid-cols-4 sm:gap-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4  xl:mx-0">
              {latestNews.map((news) => (
                <NewsCard
                  news={news}
                  key={news._id}
                />
              ))}
            </div>
          </animated.div>
        </div>
      )}
    </div>
  );
};

export default Column;
