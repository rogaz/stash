import { Head, Link } from "@inertiajs/react";
import { PageProps, Snippet } from '@/types';
import { DeleteButton } from "@/components/DeleteButton";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/layouts/AppLayout";
import { PageHeader } from "@/components/PageHeader";

type Props = PageProps & {
  snippet: Snippet;
}

export default function Show({ snippet }: Props) {
  return (
    <AppLayout>
      <Head title={snippet.title} />
      <PageHeader title={snippet.title} description={snippet.description ?? ""} >
        <DeleteButton href={`/snippets/${snippet.id}`} />
        <Link href={`/snippets/${snippet.id}/edit`}>
          <Button className="ml-4">Edit</Button>
        </Link>
      </PageHeader>

      <div className="bg-gray-100 border border-gray-300 rounded p-4 mb-6 whitespace-pre-wrap">
        {snippet.content}
      </div>

      <div className="text-sm text-gray-600">
        <p>Type: {snippet.snippet_type}</p>
        <p>Language: {snippet.language || 'N/A'}</p>
        <p>Created At: {new Date(snippet.created_at).toLocaleString()}</p>
        <p>Updated At: {new Date(snippet.updated_at).toLocaleString()}</p>
      </div>
    </AppLayout>
  );
}
