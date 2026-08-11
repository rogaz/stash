import { Head, useForm, Link } from "@inertiajs/react";
import { FormEvent } from "react";
import { PageProps, LANGUAGES } from '../../types';

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props extends PageProps {
  snippet_types?: string[];
}

export default function New({errors, snippet_types}: Props) {
  const formatOptionLabel = (value: string) =>
    value ? value.charAt(0).toUpperCase() + value.slice(1) : value;

  const { data, setData, post, processing, errors: formErrors } = useForm({
    title: '',
    content: '',
    language: '',
    description: '',
    snippet_type: '',
    favorite: false,
  });

  // Merge server errors with form errors
  const allErrors = { ...errors, ...formErrors };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    post('/snippets', {
      onSuccess: () => {
        // Optionally reset the form or handle success
      },
    });
  };

  return (
    <>
      <Head title="New Snippet" />

      <div className="max-w-2xl mx-auto py-8 p-4">
        <h1 className="text-3xl font-bold mb-6">Create New Snippet</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={data.title}
              placeholder="Enter snippet title"
              onChange={(e) => setData('title', e.target.value)}
              className={`w-full mt-1 ${allErrors?.title ? 'border-red-500' : ''}`}
            />
            {allErrors?.title && (
              <p className="text-red-500 text-sm mt-1">{allErrors.title.join(', ')}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="snippet_type">Snippet Type</Label>
            <Select
              name="snippet_type"
              onValueChange={(value) => setData('snippet_type', value ?? '')}
              value={data.snippet_type}
            >
              <SelectTrigger className={`w-full ${allErrors?.snippet_type ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Select a snippet type">
                  {data.snippet_type ? formatOptionLabel(data.snippet_type) : null}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Select a snippet type</SelectItem>
                {snippet_types?.map((type) => (
                  <SelectItem key={type} value={type}>
                    {formatOptionLabel(type)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {allErrors?.snippet_type && (
              <p className="text-red-500 text-sm mt-1">{allErrors.snippet_type.join(', ')}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              value={data.content}
              onChange={(e) => setData('content', e.target.value)}
              className={`w-full mt-1 ${allErrors?.content ? 'border-red-500' : ''}`}
            />
            {allErrors?.content && (
              <p className="text-red-500 text-sm mt-1">{allErrors.content.join(', ')}</p>
            )}
          </div>

          {LANGUAGES.length > 0 && (
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select
                name="language"
                onValueChange={(value) => setData('language', value ?? '')}
                value={data.language || ''}
              >
                <SelectTrigger className={`w-full ${allErrors?.language ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select a language">
                    {data.language ? formatOptionLabel(data.language) : null}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Select a language</SelectItem>
                  {LANGUAGES.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                      {formatOptionLabel(lang)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {allErrors?.language && (
                <p className="text-red-500 text-sm mt-1">{allErrors.language.join(', ')}</p>
              )}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              className={`w-full mt-1 ${allErrors?.description ? 'border-red-500' : ''}`}
            />
            {allErrors?.description && (
              <p className="text-red-500 text-sm mt-1">{allErrors.description.join(', ')}</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="favorite"
              name="favorite"
              checked={data.favorite}
              onCheckedChange={(checked) => setData('favorite', Boolean(checked))}
            />
            <Label htmlFor="favorite" className="ml-2">
              Add to Favorites
            </Label>
          </div>

          <div className="space-y-2">
            <Button type="submit" disabled={processing}>
              {processing ? 'Saving...' : 'Create Snippet'}
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/snippets">Cancel</Link>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
