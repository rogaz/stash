import * as React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Snippet, PageProps } from '@/types';
import { Button } from '@/components/ui/button';
import { AppLayout, BreadcrumbItem } from '@/layouts/AppLayout';
import { PageHeader } from "@/components/PageHeader";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle
} from '@/components/ui/item'
import { ChevronRight, Code, SquareCode, Star } from 'lucide-react'

// NOTE: We're using plain Tailwind CSS for styling in this component, and will add shdcn in the future.

interface Props extends PageProps {
  snippets: Snippet[];
}

export default function Index({ snippets }: Props) {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Snippets', href: '/snippets' }
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Snippets" />
      <PageHeader title="Snippets" description="Manage your code snippets" />

      <div className="space-y-4">
        <ItemGroup>
          {snippets.map((snippet, index) => (
            <React.Fragment key={snippet.id}>
              <Link href={`/snippets/${snippet.id}`}>
                <Item>
                  <ItemContent className="gap-1">
                    <ItemTitle className="font-semibold">{snippet.title}</ItemTitle>
                    <ItemDescription className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Code className="size-4"/>
                        {snippet.language}
                      </span>
                      <span className="flex items-center gap-1">
                        <SquareCode className="size-4" />
                        {snippet.snippet_type}
                      </span>
                      { snippet.favorite &&
                        <span className="flex items-center gap-1">
                          <Star className="size-4 text-amber-500" />
                        </span>
                      }
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button
                      variant="link"
                      size="icon"
                    >
                      <ChevronRight />
                    </Button>
                  </ItemActions>
                </Item>
              </Link>
              {index !== snippets.length -1 && <ItemSeparator />}
            </React.Fragment>
          ))}
        </ItemGroup>
      </div>

      {snippets.length === 0 && (
        <p className="text-gray-600">No snippets found. Create your first snippet!</p>
      )}
    </AppLayout>
  )
}
