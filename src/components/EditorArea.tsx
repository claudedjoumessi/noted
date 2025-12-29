import React from "react";
import { useEditor, EditorContent, EditorContext } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CommandPalette from "./CommandPalette";

const EditorArea = () => {
  const editor = useEditor({
    extensions: [StarterKit], // define your extension array
    content: "<h1>Hello World!</h1>", // initial content
    editorProps: {
      attributes: {
        class: "w-full p-3 outline-none",
      },
    },
  });

  // Memoizing context for efficiency
  const editorProvider = React.useMemo(() => ({ editor }), [editor]);
  // const editorProvider = editor;

  return (
    <div className="w-dvw h-dvh flex">
      <EditorContext.Provider value={editorProvider}>
        <CommandPalette editor={editor} />
        <div className="px-4 py-6 w-full h-full editor-area">
          <EditorContent editor={editor} />
        </div>
      </EditorContext.Provider>
    </div>
  );
};

export default EditorArea;
