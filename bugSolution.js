```javascript
// pages/index.js
export default async function Home() {
  const res = await fetch('/api/data');
  const data = await res.json();

  if (!data) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>Hello {data.message}</div>
  );
}

// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ message: 'World' });
}
```