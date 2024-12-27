// App.jsx
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { useState } from "react";



function App() {
  const [pendingMs] = useState(4000)

  return (

      <RouterProvider
        router={router}
        defaultPreload="intent"
        defaultPendingMs={pendingMs + pendingMs}
        defaultPendingMinMs={pendingMs }
      />

  );
}

export default App;
