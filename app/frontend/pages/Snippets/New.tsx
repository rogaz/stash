import { Head, Form } from "@inertiajs/react";
import { PageProps, LANGUAGES } from '../../types';

type NewSnippetProps = PageProps & {
  snippet_types: string[];
}

export default function New({ flash, errors, snippet_types }: NewSnippetProps) {
  return (
    <>
      <Head title="New Snippet" />

      <div className="max-w-2xl mx-auto py-8 p-4">
        <h1 className="text-3xl font-bold mb-6">Create New Snippet</h1>

        {flash?.notice && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            {flash.notice}
          </div>
        )}

        <Form method="post" action="/snippets" className="space-y-6">
          <div>
            <label htmlFor="snippet_type" className="block text-sm font-medium text-gray-700">
              Snippet Type
            </label>
            <select
              name="snippet_type"
              id="snippet_type"
              className={`w-full border block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors?.snippet_type ? 'border-red-500' : ''
              }`}
            >
              <option value="">Select a snippet type</option>
              {snippet_types.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
            {errors?.snippet_type && (
              <p className="text-red-500 text-sm mt-1">{errors.snippet_type.join(', ')}</p>
            )}
          </div>

          {LANGUAGES.length > 0 && (
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <select
                name="language"
                id="language"
                className={`w-full border block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors?.language ? 'border-red-500' : ''
                }`}
              >
                <option value="">Select a language</option>
                {LANGUAGES.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </option>
                ))}
              </select>
              {errors?.language && (
                <p className="text-red-500 text-sm mt-1">{errors.language.join(', ')}</p>
              )}
            </div>
          )}

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className={`w-full border block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors?.title ? 'border-red-500' : ''
              }`}
            />
            {errors?.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.join(', ')}</p>
            )}
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              name="content"
              id="content"
              rows={10}
              className={`w-full border block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors?.content ? 'border-red-500' : ''
              }`}
            ></textarea>
            {errors?.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content.join(', ')}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              Create Snippet
            </button>
          </div>
        </Form>
      </div>
    </>
  )
}
