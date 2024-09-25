import Instruction from "@/components/main/instruction";
import Landing from "../components/main/landing";
import MainList from "../components/main/list";

export default function Home() {
  return (
    <div>
      <Landing />
      <MainList />
      <Instruction />
    </div>
  );
}
