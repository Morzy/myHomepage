import style from './stye.module.css';

export default function BoxPage() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>

      <div>
        <h1>Block boxes</h1>
        <div></div>
      </div>

      <p>I am a paragraph. A short one.</p>
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
<p>I am another paragraph. Some of the <span className="block">words</span> have been wrapped in a <span>span element</span>.</p>
    </div>
  );
}