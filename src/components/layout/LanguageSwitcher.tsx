'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname.replace(`/${locale}`, `/${nextLocale}`));
    });
  }

  return (
    <label className="relative text-text-secondary">
      <Globe className="absolute left-2 top-1/2 -translate-y-1/2" size={18} />
      <select
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
        className="appearance-none bg-transparent py-2 pl-8 pr-6 rounded-md border border-border-medium focus:border-primary-accent focus:ring-primary-accent"
      >
        <option value="en">English</option>
        <option value="he">עברית</option>
      </select>
    </label>
  );
}