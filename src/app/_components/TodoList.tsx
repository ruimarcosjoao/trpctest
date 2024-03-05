"use client";

import { useState } from "react";
import { trpc } from "../../_trpc/client";

export default function TodoList() {
  const getTodos = trpc.getTodos.useQuery();
  const addTodo = trpc.addTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });
  const [content, setContent] = useState<string>("");
  return (
    <div>
      <p>{JSON.stringify(getTodos.data)}</p>
      <div>
        <label htmlFor="content">Content</label>
        <input
          type="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text-black"
        />
        <button
          onClick={async () => {
            if (content.length) {
              addTodo.mutate(content);
              setContent("");
            }
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
