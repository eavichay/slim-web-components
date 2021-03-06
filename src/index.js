import Component from './component.js';
import {
  ADDED,
  CREATE,
  RENDER,
  REMOVED,
  block,
  internals,
  repeatCtx,
  requestIdleCallback,
  index,
} from './internals.js';
export { DirectiveRegistry, PluginRegistry } from './enhance.js';
export { processDOM, removeBindings, createBind } from './dom.js';
export * as Utils from './utils.js';

export { Component as Slim };
export { Component };
export const Phase = {
  ADDED,
  CREATE,
  RENDER,
  REMOVED,
};

export const Internals = {
  repeatCtx,
  internals,
  block,
  index,
  requestIdleCallback,
};

/**
 * @global
 * @var Slim
 * @type {Component}
 */

// @ts-ignore
Window.prototype.Slim = Component;
