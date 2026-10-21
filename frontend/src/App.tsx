import { useEffect, useState } from "react";
import type { Category } from "./types/campus-event";
import { events } from "./data/events";
import { filterByCategory, findEventById, searchEvents } from "./utils/filter-events";
import "./App.css";

import type { PageName } from "./types/page";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import EventList from "./components/events/EventList";
import EventFilter from "./components/events/EventFilter";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/forms/EventForm";
const categories = [...new Set(events.map(event => event.category))];

function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");
  function go(next: PageName, id: string | null = null): void {
    setPage(next);
    setSelectedId(id);
  }
  const selected = selectedId ? findEventById(events, selectedId) : undefined;
  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 2);
  const filtered = filterByCategory(searchEvents(events, searchText), category);
  const title = page === "detail" ? selected?.title ?? "Etkinlik bulunamadı"
    : page === "add" ? "Etkinlik Ekle" : page === "update" ? "Etkinlik Güncelle"
    : page === "events" ? "Etkinlikler" : "Kampüs Etkinlikleri";

  useEffect(() => {
    document.title = `Kampüs Etkinlikleri — ${title}`;
  }, [title]);

  return <>
    <Header title={title} onHome={() => go("home")}>
      <Navigation current={page} onNavigate={go} />
    </Header>
    <main>
      {page === "home" && <>
        <p className="aciklama-metni">Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.</p>
        <h2>Yaklaşan 2 etkinlik</h2>
        <EventList events={upcoming} onShowDetail={id => go("detail", id)}
          className="iki-sutun" label="Yaklaşan etkinlikler" />
        <a className="btn-islem" href="#events" onClick={e => { e.preventDefault(); go("events"); }}>Tüm etkinlikleri gör →</a>
      </>}
      {page === "events" && <>
        <h2>Tüm etkinlikler</h2>
        <EventFilter searchText={searchText} category={category} categories={categories}
          onSearchChange={setSearchText} onCategoryChange={setCategory} />
        {filtered.length > 0 && <p id="sonuc" role="status">{filtered.length} etkinlik listeleniyor.</p>}
        <EventList events={filtered} onShowDetail={id => go("detail", id)} emptyText="Etkinlik bulunamadı." />
      </>}
      {page === "detail" && !selected && <div className="hata-kutusu" role="alert">
        Etkinlik bulunamadı. <a href="#events" onClick={e => { e.preventDefault(); go("events"); }}>Listeye dön</a>
      </div>}
      {page === "detail" && selected && <EventDetail event={selected}
        onBack={() => go("events")} onEdit={id => go("update", id)} />}
      {(page === "add" || page === "update") && <>
        <h2>{title}</h2>
        <EventForm key={page} onSubmit={() => window.scrollTo(0, 0)} />
      </>}
    </main>
    <Footer />
  </>;
}
export default App;

