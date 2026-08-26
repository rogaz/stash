interface Props {
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, children }: Props) {
  return (
    <div className="page-header mb-6 flex items-center justify-between">
      <div>
        <h1 className="flex-1 scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">{title}</h1>
        {description && <p className="text-lg text-muted-foreground">{description}</p>}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
