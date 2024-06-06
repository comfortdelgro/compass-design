import { FocusableElement } from '../types/scroll.types';
import { ScopeRef } from './../types/event.types';
export declare class Tree {
    root: TreeNode;
    private fastMap;
    constructor();
    get size(): number;
    getTreeNode(data: ScopeRef): TreeNode;
    addTreeNode(scopeRef: ScopeRef, parent: ScopeRef, nodeToRestore?: FocusableElement): void;
    addNode(node: TreeNode): void;
    removeTreeNode(scopeRef: ScopeRef): void;
    traverse(node?: TreeNode): Generator<TreeNode>;
    clone(): Tree;
}
declare class TreeNode {
    scopeRef: ScopeRef;
    nodeToRestore: FocusableElement | undefined;
    parent: TreeNode | undefined;
    children: Set<TreeNode>;
    contain: boolean;
    constructor(props: {
        scopeRef: ScopeRef;
    });
    addChild(node: TreeNode): void;
    removeChild(node: TreeNode): void;
}
export {};
