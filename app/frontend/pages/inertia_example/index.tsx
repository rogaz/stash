import { Head } from "@inertiajs/react";
import { version as react_version } from "react";

import railsSvg from "/assets/rails.svg";
import inertiaSvg from "/assets/inertia.svg";
import reactSvg from "/assets/react.svg";

import cs from "./index.module.css";

export default function InertiaExample({
  rails_version,
  ruby_version,
  rack_version,
  inertia_rails_version
}: {
  rails_version: string;
  ruby_version: string;
  rack_version: string;
  inertia_rails_version: string;
}) {
  return (
    <div className={cs.root}>
      <Head title="Stash" />

      <h1 className="text-6xl text-white font-bold">Stash</h1>
    </div>
  )
}
