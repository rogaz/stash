import { Head } from "@inertiajs/react";
import { FormEvent } from "react";
import { PageProps, Snippet } from "@/types";
import SnippetForm, { SnippetFormData } from "@/components/SnippetForm";
import { useForm } from "@inertiajs/react";
import { AppLayout } from "@/layouts/AppLayout";
import { PageHeader } from "@/components/PageHeader";

type Props = PageProps & {
  snippet: Snippet;
  snippet_types?: string[];
};

export default function Edit({ errors, snippet, snippet_types }: Props) {
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
    <AppLayout>
      <Head title={`Edit Snippet - ${snippet.title}`} />

      <div className="py-8 p-4">
        <PageHeader title="Edit Snippet" description={`Editing snippet: ${snippet.title}`} />

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
    </AppLayout>
  );
}