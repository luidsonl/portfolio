type Props = {
  active: boolean;
  children: React.ReactNode;
};

export default function LanguageLabel({ active, children }: Props) {
  return (
    <span
      className={`text-sm font-medium ${
        active
          ? "text-blue-600 dark:text-blue-400"
          : "text-gray-500 dark:text-gray-400"
      }`}
    >
      {children}
    </span>
  );
}
