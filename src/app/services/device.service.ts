import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../models/device';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  apiURL = "http://localhost:3000/devices";

  constructor(private http: HttpClient) { }

  //getALL Devices
  getAll()
  {
    return this.http.get<Device[]>(this.apiURL);
  }

  //delete device by id
  delete(id: any) {
    return this.http.delete(`${this.apiURL}/${id}`)
  }

  //update device

  updateDevice(device: Device)
  {
    return this.http.put(`${this.apiURL}/${device.id}`,device)
  }

  //add a new device
  addDevice(device: Device) {
    return this.http.post<Device>(this.apiURL, device);
  }

  //find By id
  getOneDevice(id:any)
  {
    return this.http.get<Device>(`${this.apiURL}/${id}`);

  }
}


