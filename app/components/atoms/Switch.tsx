type Props = {
  checked: boolean;
  onToggle: () => void;
};

export default function Switch({ checked, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="relative inline-flex h-7 w-12 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors hover:bg-gray-400 dark:hover:bg-gray-600 cursor-pointer"
      role="switch"
      aria-checked={checked}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-200 shadow-lg transition-all duration-200 ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}