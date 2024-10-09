import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { PlateEditor } from '@/components/plate-editor/plate-editor';
import { buttonVariants } from '@/components/plate-ui/button';


export default function FirstTestPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex w-[600px] flex-col gap-4">
        <PlateEditor />
      </div>
    </section>
  );
}
