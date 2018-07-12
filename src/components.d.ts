/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface CwLatestNews {
      'rows': number;
      'solr': string;
      'solrProxy': string;
      'start': number;
      'tag': string;
    }
  }

  interface HTMLCwLatestNewsElement extends StencilComponents.CwLatestNews, HTMLStencilElement {}

  var HTMLCwLatestNewsElement: {
    prototype: HTMLCwLatestNewsElement;
    new (): HTMLCwLatestNewsElement;
  };
  interface HTMLElementTagNameMap {
    'cw-latest-news': HTMLCwLatestNewsElement;
  }
  interface ElementTagNameMap {
    'cw-latest-news': HTMLCwLatestNewsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cw-latest-news': JSXElements.CwLatestNewsAttributes;
    }
  }
  namespace JSXElements {
    export interface CwLatestNewsAttributes extends HTMLAttributes {
      'rows'?: number;
      'solr'?: string;
      'solrProxy'?: string;
      'start'?: number;
      'tag'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;