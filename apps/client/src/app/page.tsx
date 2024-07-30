import { Button } from "@chartit/ui";
import Landing from "./components/main/landing";
import GraphList from "./components/main/graph";

export default function Home() {
  return (
    <div>
      <Landing />
      <GraphList />
    </div>
  );
}
