import { Head, Form, Link } from "@inertiajs/react";
import { PageProps, Snippet } from '../../types';

type ShowSnippetProps = PageProps & {
  snippet: Snippet;
}

export default function Show({ snippet }: ShowSnippetProps) {
  return (
    <>
      <Head title={snippet.title} />

      <div className="max-w-2xl mx-auto py-8 p-4">
        <div className="flex items-center mb-6">
          <h1 className="flex-1 text-3xl font-bold">{snippet.title}</h1>
          <Form method="delete" action={`/snippets/${snippet.id}`} className="inline">
            <input type="hidden" name="_method" value="delete" />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </Form>

          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Edit
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
    </>
  );
}
