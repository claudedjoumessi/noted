import {
  Bold,
  Heading1,
  Heading2,
  Italic,
  Strikethrough,
  Underline,
} from "lucide-react";
import { useEditorState, type Editor } from "@tiptap/react";
import { Toggle } from "./ui/toggle";


const CommandPalette = ({editor}: {editor: Editor | null}) => {
  if(!editor) return null;

  const editorState = useEditorState({
    editor,
    selector: ctx => {
      return {
        isBold: ctx.editor.isActive('bold') ?? false,
        isItalic: ctx.editor.isActive('italic') ?? false,
        isStrike: ctx.editor.isActive('strike') ?? false,
        isHeading1: ctx.editor.isActive('heading', { level: 1 }) ?? false,
        isHeading2: ctx.editor.isActive('heading', { level: 2 }) ?? false,
        isBulletList: ctx.editor.isActive('bulletList') ?? false,
        isOrderedList: ctx.editor.isActive('orderedList') ?? false
      }
    },
  })

  const bisActions = [
    {
      icon: <Bold className="size-5" />,
      label: "Bold Text",
      onClick:() => editor.chain().focus().toggleBold().run(),
      isPressed: editorState.isBold
    },
    {
      icon: <Italic className="size-5" />,
      label: "Italicize Text",
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isPressed: editorState.isItalic
    },
    {
      icon: <Strikethrough className="size-5" />,
      label: "Strikethrough Text",
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isPressed: editorState.isStrike
    },
  ];
  const headings = [
    {
      icon: <Heading1 className="size-5" />,
      label: "Heading 1",
      onClick:() => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isPressed: editorState.isHeading1
    },
    {
      icon: <Heading2 className="size-5" />,
      label: "Heading 2",
      onClick:() => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isPressed: editorState.isHeading2
    },
  ]
  return (
    <div className="h-full flex flex-col gap-3 items-center justify-center px-9 z-50">
      <div className="flex shadow-xl p-2 rounded-3xl bg-neutral-900/60">
        <div className="flex flex-col gap-2">
          {bisActions.map((item, index) => (
            <Toggle
              key={index}
              size={"lg"}
              pressed={item.isPressed}
              onPressedChange={item.onClick}
              className="rounded-xl"
            >
              {item.icon}
            </Toggle>
          ))}
        </div>
      </div>
      <div className="flex shadow-xl p-2 rounded-3xl bg-neutral-900/60">
        <div className="flex flex-col gap-2">
          {headings.map((item, index) => (
            <Toggle
              key={index}
              size={"lg"}
              pressed={item.isPressed}
              onPressedChange={item.onClick}
              className="rounded-xl"
            >
              {item.icon}
            </Toggle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
