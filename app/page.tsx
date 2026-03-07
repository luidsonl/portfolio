import { Home } from "./templates/Home";
import getDictionary from "@/i18n/getDictionary";

export default function HomePt() {
  const t = getDictionary("pt");

  return <Home t={t} />;
}
