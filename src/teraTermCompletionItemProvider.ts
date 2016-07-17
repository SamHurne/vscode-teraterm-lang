'use script';

import {
   CompletionItemProvider,
   TextDocument,
   Position,
   CancellationToken,
   CompletionItem,
   CompletionItemKind,
   CompletionList
} from 'vscode';

import * as fs from 'fs';

export class TeraTermCompletionItemProvider implements CompletionItemProvider {

   private completionList: CompletionList;

   /**
    * Default constructor
    */
   constructor() {

      // Load all of the language symbols out of the symbols.json file
      var symbols = require('../../symbols.json');
      this.completionList = new CompletionList();

      symbols["communication-commands"].forEach((cmd) => {
         let item = new CompletionItem(cmd["Command"]);
         item.kind = CompletionItemKind.Function;
         item.detail = "Communication Command";
         item.documentation = cmd["Description"];
         this.completionList.items.push(item);
      });

      symbols["password-commands"].forEach((cmd) => {
         let item = new CompletionItem(cmd["Command"]);
         item.kind = CompletionItemKind.Function;
         item.detail = "Password Command";
         item.documentation = cmd["Description"];
         this.completionList.items.push(item);
      });

      symbols["misc-commands"].forEach((cmd) => {
         let item = new CompletionItem(cmd["Command"]);
         item.kind = CompletionItemKind.Function;
         item.detail = "Miscellaneous Command";
         item.documentation = cmd["Description"];
         this.completionList.items.push(item);
      });

      symbols["string-operators"].forEach((cmd) => {
         let item = new CompletionItem(cmd["Command"]);
         item.kind = CompletionItemKind.Function;
         item.detail = "String Operator";
         item.documentation = cmd["Description"];
         this.completionList.items.push(item);
      });

      symbols["file-operators"].forEach((cmd) => {
         let item = new CompletionItem(cmd["Command"]);
         item.kind = CompletionItemKind.Function;
         item.detail = "File Operator";
         item.documentation = cmd["Description"];
         this.completionList.items.push(item);
      });
   }

   /**
    * Provide completion items for the given position and document.
    *
    * @param document The document in which the command was invoked.
    * @param position The position at which the command was invoked.
    * @param token A cancellation token.
    * @return An array of completions, a [completion list](#CompletionList), or a thenable that resolves to either.
    * The lack of a result can be signaled by returning `undefined`, `null`, or an empty array.
    */
   provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): CompletionList {
      return this.completionList;
   }

   /**
    * Given a completion item fill in more data, like [doc-comment](#CompletionItem.documentation)
    * or [details](#CompletionItem.detail).
    *
    * The editor will only resolve a completion item once.
    *
    * @param item A completion item currently active in the UI.
    * @param token A cancellation token.
    * @return The resolved completion item or a thenable that resolves to of such. It is OK to return the given
    * `item`. When no result is returned, the given `item` will be used.
    */
   resolveCompletionItem(item: CompletionItem, token: CancellationToken): CompletionItem {
      return item;
   }
}