import { Alert, AlertTitle } from '@/components/ui/alert'

interface Props {
  flash: {
    notice?: string
    alert?: string
  }
}

export function Flash({ flash }: Props) {
  if (!flash.notice && !flash.alert) {
    return null
  }

  return (
    <>
      {flash.notice && (
        <Alert className="my-4 text-center uppercase text-sm tracking-widest">
          <AlertTitle>{flash.notice}</AlertTitle>
        </Alert>
      )}
      {flash.alert && (
        <Alert variant="destructive" className="my-4 text-center uppercase text-sm tracking-widest">
          <AlertTitle>{flash.alert}</AlertTitle>
        </Alert>
      )}
    </>
  )
}
