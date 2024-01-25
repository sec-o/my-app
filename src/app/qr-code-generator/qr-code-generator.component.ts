import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as QRCode from 'qrcode-generator';

@Component({
  selector: 'qr-code-generator-app',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css'],
})
export class QrCodeGeneratorComponent implements AfterViewInit {
  @ViewChild('qrcode', { static: false }) qrcode: ElementRef | any;
  qrData: string = 'https://example.com'; // Default data

  ngAfterViewInit() {
    this.generateQRCode();
  }

  generateQRCode() {
    const qr = QRCode(0, 'M');
    qr.addData(this.qrData);
    qr.make();

    const qrElement = this.qrcode.nativeElement;
    qrElement.innerHTML = qr.createSvgTag(10);
  }

  reset() {
    this.qrData = 'https://example.com';
    this.generateQRCode();
  }
}
