declare module "*.png" {
    const path: string;
    export default path;
}

declare module '*.svg' {
    const content: React.FC<React.SVGProps<SVGElement>>
    export default content
  }

/// <reference types="vite/client" />
