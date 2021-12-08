import "./featured.scss";

export default function Featured() {
  return (
    <div className="featured">
      <img
        src="https://images.unsplash.com/photo-1598084991519-c90900bc9df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt=""
      />
      <div className="info">
        <h1 className="desc">Hero Title</h1>
      </div>
    </div>
  );
}
