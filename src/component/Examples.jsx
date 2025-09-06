import { useState } from "react";
import Title from "./Title.jsx";
import TabContent from "./TabContent.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [SelectedTopic, setSelectedTopic] = useState(null);
  return (
    <section id="examples">
      <Title title="Product Category"></Title>
      <Tabs selected={SelectedTopic} onSelect={setSelectedTopic} />
      <TabContent
        selected={SelectedTopic}
        onSuccess={() => setSelectedTopic("list")}
      />
    </section>
  );
}
