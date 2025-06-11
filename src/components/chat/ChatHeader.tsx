type ChatHeaderProps = {
  title: string;
};

export const ChatHeader = ({ title }: ChatHeaderProps) => (
  <div className="p-4 border-b border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 shadow-sm text-center font-semibold text-zinc-800 dark:text-zinc-100">
    {title}
  </div>
);

