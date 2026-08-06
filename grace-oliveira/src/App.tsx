import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { IdentidadeOlfativa } from "./components/IdentidadeOlfativa";
import { Kits } from "./components/Kits";
import { Lembrancinhas } from "./components/Lembrancinhas";
import { Sobre } from "./components/Sobre";
import { Depoimentos } from "./components/Depoimentos";
import { InstagramSection } from "./components/InstagramSection";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <IdentidadeOlfativa />
        <Kits />
        <Lembrancinhas />
        <Sobre />
        <Depoimentos />
        <Contato />
        <InstagramSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
