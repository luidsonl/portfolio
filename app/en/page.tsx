import { Home } from "../templates/Home";
import getDictionary from "@/i18n/getDictionary";


export default function HomeEn() {
  const t = getDictionary('en')

  return (
    <Home t={t}/>
    );
}