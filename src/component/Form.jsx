export default function Forms({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
