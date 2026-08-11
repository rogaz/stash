import { Head, Link } from '@inertiajs/react';
import { Snippet, PageProps } from '../../types';
import { DeleteButton } from '@/components/DeleteButton';

// NOTE: We're using plain Tailwind CSS for styling in this component, and will add shdcn in the future.

interface Props extends PageProps {
  snippets: Snippet[];
}

export default function Index({ snippets, flash }: Props) {
  return (
    <>
      <Head title="Snippets" />

      <div className="max-w-2xl mx-auto py-8 p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Snippets</h1>
          <Link
            href="/snippets/new"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            New Snippet
          </Link>
        </div>

        {flash?.notice && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            {flash.notice}
          </div>
        )}

        <div className="space-y-4">
          {snippets.map((snippet) => (
            <SnippetCard key={snippet.id} snippet={snippet} />
          ))}
        </div>

        {snippets.length === 0 && (
          <p className="text-gray-600">No snippets found. Create your first snippet!</p>
        )}
      </div>
    </>
  )
}

function SnippetCard({ snippet }: { snippet: Snippet }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition">
      <div className="flex justify-between items-start">
        <Link
            href={`/snippets/${snippet.id}`}

          >
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900">{snippet.title}</h2>
            {snippet.description && (
              <p className="text-gray-600 mt-1">{snippet.description}</p>
            )}
          </div>
        </Link>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
          {snippet.snippet_type}
        </span>

        {snippet.language && (
          <span className=" ml-4 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {snippet.language}
          </span>
        )}

        <DeleteButton href={`/snippets/${snippet.id}`} className="ml-4" size="sm" />
      </div>
    </div>
  )
}
