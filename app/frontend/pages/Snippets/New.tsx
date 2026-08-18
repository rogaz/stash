import { Head } from "@inertiajs/react";
import { FormEvent } from "react";
import { PageProps } from "../../types";
import SnippetForm, { SnippetFormData } from "../../components/SnippetForm";
import { useForm } from "@inertiajs/react";

interface Props extends PageProps {
  snippet_types?: string[];
}

export default function New({ errors, snippet_types }: Props) {
  const { data, setData, post, processing, errors: formErrors } = useForm<SnippetFormData>({
    title: "",
    content: "",
    language: "",
    description: "",
    snippet_type: "",
    favorite: false,
  });

  const allErrors = { ...errors, ...formErrors };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    post("/snippets");
  };

  return (
    <>
      <Head title="New Snippet" />

      <div className="max-w-2xl mx-auto py-8 p-4">
        <h1 className="text-3xl font-bold mb-6">Create New Snippet</h1>

        <SnippetForm
          data={data}
          onDataChange={(key, value) => setData(key, value)}
          onSubmit={handleSubmit}
          isProcessing={processing}
          submitLabel="Create Snippet"
          cancelHref="/snippets"
          allErrors={allErrors}
          snippet_types={snippet_types}
        />
      </div>
    </>
  );
}
