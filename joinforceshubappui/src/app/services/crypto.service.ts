import { Injectable } from '@angular/core';
import * as CryptoTS from 'crypto-ts';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }


  encrypto(value: string): string {
    return CryptoTS.AES.encrypt(value, 'secret key 123').toString();
  }

  decrypto(value: string): string {
    const bytes = CryptoTS.AES.decrypt(value, 'secret key 123');
    const plainText = bytes.toString(CryptoTS.enc.Utf8);
    return plainText;
  }
}