import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="main">
      <div className="header">
        {/* <img src="/images/128.png" className="headerImg" alt="word.io"></img> */}
        <h1 className="header-brand">Word.io</h1>
      </div>
      {children}
    </div>
  );
}
