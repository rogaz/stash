import { Head } from "@inertiajs/react";
import { FormEvent } from "react";
import { PageProps, Snippet } from "../../types";
import SnippetForm, { SnippetFormData } from "../../components/SnippetForm";
import { useForm } from "@inertiajs/react";

type Props = PageProps & {
  snippet: Snippet;
  snippet_types?: string[];
};

export default function Edit({ flash, errors, snippet, snippet_types }: Props) {
  const { data, setData, put, processing, errors: formErrors } = useForm<SnippetFormData>({
    title: snippet.title,
    content: snippet.content,
    language: snippet.language || "",
    description: snippet.description || "",
    snippet_type: snippet.snippet_type || "",
    favorite: snippet.favorite,
  });

  const allErrors = { ...errors, ...formErrors };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    put(`/snippets/${snippet.id}`);
  };

  return (
    <>
      <Head title={`Edit Snippet - ${snippet.title}`} />

      <div className="max-w-2xl mx-auto py-8 p-4">
        <h1 className="text-3xl font-bold mb-6">Edit Snippet</h1>

        {flash?.notice && (
          <div className="mb-6 rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700">
            {flash.notice}
          </div>
        )}

        <SnippetForm
          data={data}
          onDataChange={(key, value) => setData(key, value)}
          onSubmit={handleSubmit}
          isProcessing={processing}
          submitLabel="Update Snippet"
          cancelHref={`/snippets/${snippet.id}`}
          allErrors={allErrors}
          snippet_types={snippet_types}
        />
      </div>
    </>
  );
}