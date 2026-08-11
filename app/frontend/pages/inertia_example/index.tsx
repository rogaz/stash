import { Head } from "@inertiajs/react";

import cs from "./index.module.css";

export default function InertiaExample() {
  return (
    <div className={cs.root}>
      <Head title="Stash" />

      <h1 className="text-6xl text-white font-bold">Stash</h1>
    </div>
  )
}
