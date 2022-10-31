import { Component, OnInit } from '@angular/core';
import { Client } from "../../model/client";
import { ClientService } from "../../services/client.service";
import {Car} from "../../model/car";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clients: Client[];
  isEnabled: boolean;

  constructor(private clientService: ClientService) {
    this.isEnabled = true;
  }

  ngOnInit() {
    this.clientService.findAll().subscribe(data => {
      this.clients = data;
    });
  }

  removeClient(client: Client) {
    const index = this.clients.indexOf(client);
    this.clients.splice(index, 1);
  }

  editClient() {
    this.isEnabled = false;
  }

  saveClient(client: Client) {
    const index = this.clients.indexOf(client);
    this.clients.splice(index, 1, {id: (index + 1).toString(), name: client.name, surname: client.surname, login: client.login, email: client.email, phone: client.phone, loginStatus: client.loginStatus });
    this.isEnabled = true;
  }
}
