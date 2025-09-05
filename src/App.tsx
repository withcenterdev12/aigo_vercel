import Header from "./components/Header";
import Section_3 from "./components/sections/Section_3";
import Section_1 from "./components/sections/Section_1";
import Section_2 from "./components/sections/Section_2";
import Section_4 from "./components/sections/Section_4";

function App() {
  return (
    <main className="mx-auto flex flex-col sm:w-[1200px]">
      <Header />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
    </main>
  );
}

export default App;
