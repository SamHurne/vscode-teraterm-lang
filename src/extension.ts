'use strict';

// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

import {
   TeraTermCompletionItemProvider
} from './teraTermCompletionItemProvider';

export function activate(context: vscode.ExtensionContext) {
   vscode.languages.registerCompletionItemProvider("ttl", new TeraTermCompletionItemProvider());
}

export function deactivate() {

}