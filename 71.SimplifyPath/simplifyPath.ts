function simplifyPath(path: string): string {
  const stack: string[] = [];
  const parts = path.split("/");

  for (const part of parts) {
    if (part === "" || part === ".") {
      continue; // Skip empty or current directory
    } else if (part === "..") {
      stack.pop(); // Go up one directory
    } else {
      stack.push(part); // Add valid directory to stack
    }
  }

  return "/" + stack.join("/");
}
