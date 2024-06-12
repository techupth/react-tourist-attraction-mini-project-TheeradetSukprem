import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import { TopicCard } from "./TopicCard";

function TopicHighlight() {
  const [topics, setTopics] = useState([]);

  const getTopicData = async () => {
    try {
      const result = await axios.get("http://localhost:4001/trips?keywords=");
    //   console.log(result);
      setTopics(result.data.data); 
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };

  useEffect(() => {
    getTopicData();
  }, []); 


  return (
    <section>
      {topics.map((topic,index) => (
        <TopicCard
          key={index}
          photo={topic.photos}
          topicName={topic.title}
          description={topic.description}
          url = {topic.url}
          tags={topic.tags}
        />
      ))}
    </section>
  );
}

export default TopicHighlight;
