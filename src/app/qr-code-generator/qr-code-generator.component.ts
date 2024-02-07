import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as QRCode from 'qrcode-generator';

@Component({
  selector: 'qr-code-generator-app',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css'],
})
export class QrCodeGeneratorComponent {
  @ViewChild('qrcode', { static: false }) qrcode: ElementRef | any;
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | any;
  qrData: string = '';
  newQrCodeGenerated: boolean = false;
  fileAttached: boolean = false;
  logoFile?: File;

  generateQRCode(): void {
    if (this.logoFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const logoData = reader.result as string;
        this.generateQRCodeWithLogo(logoData);
      };
      reader.readAsDataURL(this.logoFile);
    } else {
      this.generateQRCodeWithoutLogo();
    }
    this.newQrCodeGenerated = true;
  }

  generateQRCodeWithLogo(logoData: string) {
    // Create QR code image
    const qr = QRCode(0, 'M');
    qr.addData(this.qrData);
    qr.make();
    const imageDataUrl = qr.createDataURL(10, 0);
    const qrCode = new Image();
    qrCode.src = imageDataUrl;

    // Create logo image
    const element = this.qrcode.nativeElement;
    const logo = new Image();
    logo.src = logoData;

    logo.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (context) {
        const qrSize = qrCode.width;

        canvas.width = qrSize;
        canvas.height = qrSize;

        // Draw QR code
        context.drawImage(qrCode, 0, 0, qrSize, qrSize);

        // Draw logo in the center of QR code
        const logoSize = Math.min(qrSize / 2, 50); // Adjust logo size as needed
        const logoPosition = (qrSize - logoSize) / 2;

        context.drawImage(logo, logoPosition, logoPosition, logoSize, logoSize);

        // Replace the inner HTML with the canvas containing both QR code and logo
        element.innerHTML = '';
        element.appendChild(canvas);
      }
    };
  }

  generateQRCodeWithoutLogo(): void {
    // Create QR code image
    const qr = QRCode(0, 'M');
    qr.addData(this.qrData);
    qr.make();
    const imageDataUrl = qr.createDataURL(10, 0);
    const img = new Image();
    img.src = imageDataUrl;

    img.onload = () => {
      const element = this.qrcode.nativeElement;
      element.innerHTML = '';
      element.appendChild(img);
    };
  }

  onLogoFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.logoFile = fileList[0];
      this.fileAttached = true;
    }
  }

  resetQRCode() {
    this.qrData = '';
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
    this.logoFile = undefined;
    this.fileAttached = false;
    this.newQrCodeGenerated = false;
  }

  downloadQRCode(): void {
    const qrElement = this.qrcode.nativeElement.firstChild;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = qrElement.width;
    canvas.height = qrElement.height;

    if (context) context.drawImage(qrElement, 0, 0);

    const link = document.createElement('a');
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = 'qrcode.png';
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  }
}
