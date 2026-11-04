import GiftForm from "@/components/admin/GiftForm";
import PageHeader from "@/components/admin/PageHeader";
import { requireEditor } from "@/lib/auth";
import { getAdminTaxonomy } from "@/lib/queries/admin";

export const metadata = { title: "New gift idea" };

export default async function NewGiftPage() {
  const editor = await requireEditor();
  const { categories, tags } = await getAdminTaxonomy(editor.supabase);
  return (
    <>
      <PageHeader title="New gift idea" description="New ideas start as drafts until you publish them." back={{ href: "/admin/gifts", label: "All gift ideas" }} />
      <GiftForm gift={null} categories={categories} tags={tags} />
    </>
  );
}
