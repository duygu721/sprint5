import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";
interface EventCardProps {
  event: CampusEvent;
  onShowDetail: (id: string) => void;
}
export default function EventCard({ event, onShowDetail }: EventCardProps) {
  return <article className="etkinlik-karti">
      <span className="tur-etiket">{event.category}</span>
      <h3>{event.title}</h3>
      <p className="detay-bilgi">
        <time dateTime={`${event.date}T${event.time}`}>{formatDate(event.date)} · {event.time}</time><br />
        {event.location}<br />Kontenjan: {event.capacity}
      </p>
      <a className="kart-link" href="#detail" onClick={e => { e.preventDefault(); onShowDetail(event.id); }}>Detayları gör →</a>
    </article>;
}

