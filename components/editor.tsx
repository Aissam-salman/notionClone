"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useTheme } from "next-themes";
import {useEdgeStore} from "@/lib/edgestore";
interface EditorProps {
  onChange?: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const {edgestore} = useEdgeStore();

  const handleUpload = async(file: File) => {
    const res = await edgestore.publicFiles.upload({
      file
    });

    return res.url;
  }

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[]) : undefined,
    uploadFile: handleUpload,
  });

  const uploadToDatabase = () => {
    if (onChange) {
        onChange(JSON.stringify(editor.document, null, 2));
    }
  }                 ;

  return (
    <BlockNoteView
      onChange={uploadToDatabase}
      editor={editor}
      editable={editable}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
};

export default Editor;
