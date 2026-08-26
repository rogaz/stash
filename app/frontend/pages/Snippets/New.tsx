import { Head } from "@inertiajs/react";
import { FormEvent } from "react";
import { PageProps } from "@/types";
import SnippetForm, { SnippetFormData } from "@/components/SnippetForm";
import { PageHeader } from "@/components/PageHeader";
import { useForm } from "@inertiajs/react";
import { AppLayout } from "@/layouts/AppLayout";

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
    <AppLayout>
      <Head title="New Snippet"/>
      <PageHeader title="New Snippet" description="Create a new code snippet" />
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
    </AppLayout>
  );
}
