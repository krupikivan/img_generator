export function createUrlImage(blob: Blob): string {
    return URL.createObjectURL(blob);
}
export function base64ToBlob(base64EncodedString: string): Blob {
    const binaryString = atob(base64EncodedString);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);
  
    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
  
    return new Blob([bytes], { type: "image/png" });
  }
  
  export function saveFile(blob: Blob, filename: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.addEventListener('click', () => {
        setTimeout(() => {
          URL.revokeObjectURL(link.href);
        }, 1000);
      });
      link.addEventListener('error', (error) => {
        reject(error);
      });
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      resolve(link.href);
    });
  }