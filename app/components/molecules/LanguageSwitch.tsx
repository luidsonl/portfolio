import Switch from "../atoms/Switch";
import LanguageLabel from "../atoms/LanguageLabel";

type Props = {
  isEnglish: boolean;
  onToggle: () => void;
};

export default function LanguageSwitch({ isEnglish, onToggle }: Props) {
  return (
    <div className="flex items-center gap-2">
      <LanguageLabel active={!isEnglish}>PT-BR</LanguageLabel>

      <Switch checked={isEnglish} onToggle={onToggle} />

      <LanguageLabel active={isEnglish}>EN</LanguageLabel>
    </div>
  );
}
