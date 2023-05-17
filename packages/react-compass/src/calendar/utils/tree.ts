/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/consistent-generic-constructors */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {FocusableElement} from '../types/scroll.types'
import {ScopeRef} from './../types/event.types'
import {isElementInScope} from './focus'

export class Tree {
  root: TreeNode
  private fastMap = new Map<ScopeRef, TreeNode>()

  constructor() {
    // @ts-ignore
    this.root = new TreeNode({scopeRef: null})
    // @ts-ignore
    this.fastMap.set(null, this.root)
  }

  get size() {
    return this.fastMap.size
  }

  getTreeNode(data: ScopeRef) {
    return this.fastMap.get(data)
  }

  addTreeNode(
    scopeRef: ScopeRef,
    parent: ScopeRef,
    nodeToRestore?: FocusableElement,
  ) {
    const parentNode = this.fastMap.get(parent ?? null)
    const node = new TreeNode({scopeRef})
    // @ts-ignore
    parentNode.addChild(node)
    // @ts-ignore
    node.parent = parentNode
    this.fastMap.set(scopeRef, node)
    if (nodeToRestore) {
      node.nodeToRestore = nodeToRestore
    }
  }

  addNode(node: TreeNode) {
    this.fastMap.set(node.scopeRef, node)
  }

  removeTreeNode(scopeRef: ScopeRef) {
    // never remove the root
    if (scopeRef === null) {
      return
    }
    const node = this.fastMap.get(scopeRef)
    // @ts-ignore
    const parentNode = node.parent
    // when we remove a scope, check if any sibling scopes are trying to restore focus to something inside the scope we're removing
    // if we are, then replace the siblings restore with the restore from the scope we're removing
    for (const current of this.traverse()) {
      if (
        current !== node &&
        // @ts-ignore
        node.nodeToRestore &&
        current.nodeToRestore &&
        // @ts-ignore
        node.scopeRef.current &&
        // @ts-ignore
        isElementInScope(current.nodeToRestore, node.scopeRef.current) &&
        node !== undefined
      ) {
        current.nodeToRestore = node.nodeToRestore
      }
    }
    // @ts-ignore
    const children = node.children
    // @ts-ignore
    parentNode.removeChild(node)
    if (children.size > 0 && parentNode !== undefined) {
      children.forEach((child) => parentNode.addChild(child))
    }
    // @ts-ignore
    this.fastMap.delete(node.scopeRef)
  }

  // Pre Order Depth First
  *traverse(node: TreeNode = this.root): Generator<TreeNode> {
    if (node.scopeRef != null) {
      yield node
    }
    if (node.children.size > 0) {
      for (const child of node.children) {
        yield* this.traverse(child)
      }
    }
  }

  clone(): Tree {
    const newTree = new Tree()
    for (const node of this.traverse()) {
      if (node.parent == undefined) return newTree
      newTree.addTreeNode(
        node.scopeRef,
        node.parent.scopeRef,
        node.nodeToRestore,
      )
    }
    return newTree
  }
}

class TreeNode {
  public scopeRef: ScopeRef
  public nodeToRestore: FocusableElement | undefined
  public parent: TreeNode | undefined
  public children: Set<TreeNode> = new Set()
  public contain = false

  constructor(props: {scopeRef: ScopeRef}) {
    this.scopeRef = props.scopeRef
  }
  addChild(node: TreeNode) {
    this.children.add(node)
    node.parent = this
  }
  removeChild(node: TreeNode) {
    this.children.delete(node)
    node.parent = undefined
  }
}
