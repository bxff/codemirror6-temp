/* eslint-disable */

import { EditorState } from "@codemirror/basic-setup";
import { EditorView } from "@codemirror/view";

let state = EditorState.create({
  doc: "abc" // Change the default Doc as you wish.
  // extensions: [], // Add extentions, for the editor.
});

new EditorView({
  state,
  parent: document.body // Change the CM element as you wish.
});
