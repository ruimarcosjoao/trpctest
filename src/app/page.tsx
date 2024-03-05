import TodoList from "./_components/TodoList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center container gap-4 p-24">
      <h1>App test pessoal</h1>
      <TodoList />
    </main>
  );
}
