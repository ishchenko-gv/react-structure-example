import React from "react";

import usePublicApisList from "../../common/hooks/use-public-apis-list";

export default function PublicApis() {
  const entries = usePublicApisList();

  if (!entries) return "loading";

  return (
    <ul>
      {entries.slice(0, 100).map((entry) => (
        <li>
          <a href={entry.Link}>{entry.API}</a> - {entry.Description}
        </li>
      ))}
    </ul>
  );
}
