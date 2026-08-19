import { Head, Link } from "@inertiajs/react";
import { PageProps, Snippet } from '../../types';
import { DeleteButton } from "@/components/DeleteButton";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/layouts/AppLayout";

type Props = PageProps & {
  snippet: Snippet;
}

export default function Show({ snippet }: Props) {
  return (
    <AppLayout>
      <Head title={snippet.title} />

      <div className="py-8 p-4">
        <div className="flex items-center mb-6">
          <h1 className="flex-1 text-3xl font-bold">{snippet.title}</h1>
          <DeleteButton href={`/snippets/${snippet.id}`} />

          <Link
            href={`/snippets/${snippet.id}/edit`}
          >
            <Button className="ml-4">Edit</Button>
          </Link>
        </div>

        <div className="bg-gray-100 border border-gray-300 px-4 py-3 rounded mb-6">
          <pre className="whitespace-pre-wrap">{snippet.content}</pre>
        </div>

        <div className="text-sm text-gray-600">
          <p>Type: {snippet.snippet_type}</p>
          <p>Language: {snippet.language || 'N/A'}</p>
          <p>Created At: {new Date(snippet.created_at).toLocaleString()}</p>
          <p>Updated At: {new Date(snippet.updated_at).toLocaleString()}</p>
        </div>
      </div>
    </AppLayout>
  );
}
