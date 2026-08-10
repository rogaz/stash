export type FlashData = {
  notice?: string
  alert?: string
}

export type SharedProps = {}

export type Snippet = {
  id: number;
  title: string;
  content: string;
  language: string | null;
  description: string | null;
  snippet_type: 'code' | 'prompt' | 'command' | 'note';
  favorite: boolean;
  created_at: string;
  updated_at: string;
}

export type PageProps = {
  flash?: {
    notice?: string;
    alert?: string;
  };
  errors?: Record<string, string[]>;
}

export const LANGUAGES = [
  'clojure',
  'cpp',
  'csharp',
  'css',
  'dart',
  'elixir',
  'go',
  'haskell',
  'html',
  'java',
  'javascript',
  'json',
  'kotlin',
  'lua',
  'markdown',
  'perl',
  'php',
  'python',
  'r',
  'react',
  'ruby',
  'rust',
  'scala',
  'shell',
  'sql',
  'swift',
  'typescript',
  'xml',
  'yaml',
] as const;

export type Language = typeof LANGUAGES[number]
