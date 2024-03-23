// src/types/qr-image.d.ts
declare module 'qr-image' {
    import { Stream } from 'stream';
  
    export function image(text: string, options?: { type?: string }): Stream;
  }
  