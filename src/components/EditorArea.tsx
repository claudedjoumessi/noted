import React from "react";
import { useEditor, EditorContent, EditorContext } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CommandPalette from "./CommandPalette";
import { Spinner } from "./ui/spinner";

const EditorArea = () => {
  const editor = useEditor({
    extensions: [StarterKit], // define your extension array
    content: "<h1>Hello World!</h1>", // initial content
    editorProps: {
      attributes: {
        class: "w-full mt-4 outline-none",
      },
    },
  });

  // Memoizing context for efficiency
  const editorProvider = React.useMemo(() => ({ editor }), [editor]);

  return (
    <div className="w-dvw h-dvh flex">
      <EditorContext.Provider value={editorProvider}>
        <CommandPalette editor={editor} />
        <div className="flex flex-col gap-1 px-4 py-6 w-full h-full editor-area">
          <EditorContent editor={editor} />
          <div className="w-full h-auto flex gap-1.5 items-center text-base">
            <span>Note 1 - Spreadsheets</span>
            <b>&nbsp;&nbsp;&middot;&nbsp;&nbsp;</b>
            <Spinner />
            Saving...
          </div>
        </div>
      </EditorContext.Provider>
    </div>
  );
};

export default EditorArea;
