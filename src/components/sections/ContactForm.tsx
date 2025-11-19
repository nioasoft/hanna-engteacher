'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export default function ContactForm() {
  const t = useTranslations('contact.form_labels');

  const schema = z.object({
    name: z.string().min(2, { message: t('name_error' || 'Name must be at least 2 characters.') }),
    email: z.string().email({ message: t('email_error' || 'Invalid email address.') }),
    phone: z.string().optional(),
    language: z.enum(['en', 'he']),
    message: z.string().min(10, { message: t('message_error' || 'Message must be at least 10 characters.') }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // Replace with actual form submission logic
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-primary">
          {t('name')}
        </label>
        <input
          {...register('name')}
          id="name"
          className="mt-1 block w-full rounded-md border-border-medium shadow-sm focus:border-primary-accent focus:ring-primary-accent sm:text-sm p-2"
        />
        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-primary">
          {t('email')}
        </label>
        <input
          {...register('email')}
          id="email"
          className="mt-1 block w-full rounded-md border-border-medium shadow-sm focus:border-primary-accent focus:ring-primary-accent sm:text-sm p-2"
        />
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-primary">
          {t('phone')}
        </label>
        <input
          {...register('phone')}
          id="phone"
          className="mt-1 block w-full rounded-md border-border-medium shadow-sm focus:border-primary-accent focus:ring-primary-accent sm:text-sm p-2"
        />
      </div>
      <div>
        <label htmlFor="language" className="block text-sm font-medium text-text-primary">
          {t('preferred_language')}
        </label>
        <select
          {...register('language')}
          id="language"
          className="mt-1 block w-full rounded-md border-border-medium shadow-sm focus:border-primary-accent focus:ring-primary-accent sm:text-sm p-2"
        >
          <option value="en">English</option>
          <option value="he">עברית</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary">
          {t('message')}
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-border-medium shadow-sm focus:border-primary-accent focus:ring-primary-accent sm:text-sm p-2"
          placeholder={t('message_placeholder')}
        />
        {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
      </div>
      <div>
        <Button type="submit">{t('submit')}</Button>
      </div>
    </form>
  );
}