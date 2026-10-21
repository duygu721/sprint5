import type { Category } from "../../types/campus-event";
interface EventFormProps {
  onSubmit: () => void;
}
const formCategories: Category[] = ["Seminer", "Atölye", "Söyleşi", "Yarışma"];
export default function EventForm({ onSubmit }: EventFormProps) {
  return <section className="form-kapsayici">
          <form id="etkinlik-formu" noValidate onSubmit={e => { e.preventDefault(); onSubmit(); }}>
            <div className="form-alan"><label htmlFor="ad">Etkinlik adı</label><input id="ad" name="ad" type="text" maxLength={80} required /></div>
            <div className="form-alan"><label htmlFor="kategori">Kategori</label><select id="kategori" name="kategori" defaultValue=""><option value="">Seçiniz</option>{formCategories.map(value => <option key={value} value={value}>{value}</option>)}</select></div>
            <div className="form-alan"><label htmlFor="tarih">Tarih</label><input id="tarih" name="tarih" type="date" required /></div>
            <div className="form-alan"><label htmlFor="saat">Saat</label><input id="saat" name="saat" type="time" required /></div>
            <div className="form-alan"><label htmlFor="yer">Yer</label><input id="yer" name="yer" type="text" required /></div>
            <div className="form-alan"><label htmlFor="kontenjan">Kontenjan (isteğe bağlı)</label><input id="kontenjan" name="kontenjan" type="number" min={1} max={1000} step={1} /></div>
            <div className="form-alan"><label htmlFor="aciklama">Açıklama</label><textarea id="aciklama" name="aciklama" rows={5} /></div>
            <button className="btn-islem" type="submit">Kaydet</button>
          </form>
        </section>;
}

