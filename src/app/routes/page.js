import Link from 'next/link';
import React from 'react';

export default function Routes() {
  return (
    <div>
      <p>When you click the link, look at the address bar and then go to the code</p>
      <ul>
        <li><Link href="my-folder/new-route">New Route</Link></li>
        <li><Link href="my-folder/dynamic-route">Dynamic Route</Link></li>
      </ul>
    </div>
  );
}
