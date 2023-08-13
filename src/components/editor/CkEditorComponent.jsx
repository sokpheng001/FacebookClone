"use client";
import React, { useState } from "react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function CkEditorComponent({content}) {
  const [data, setData] = useState("");
  return (
    <div className="App shadow-md m-4">
      <h2>{data}</h2>
      <CKEditor
        onReady={(editor) => {
          //   console.log("Editor is ready to use!", editor);
          // Insert the toolbar before the editable area.
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
          //   this.editor = editor;
        }}
        onError={(error, { willEditorRestart }) => {
          // If the editor is restarted, the toolbar element will be created once again.
          // The `onReady` callback will be called again and the new toolbar will be added.
          // This is why you need to remove the older toolbar.
          if (willEditorRestart) {
            this.editor.ui.view.toolbar.element.remove();
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setData(data);
        }}
        editor={DecoupledEditor}
        config={{
          ckfinder: {
            uploadUrl: "",
          },
          placeholder:"Text here..."
        
        }}
        
      />

    </div>
  );
}
