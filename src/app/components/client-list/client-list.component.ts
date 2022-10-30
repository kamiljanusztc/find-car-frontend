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

  constructor(private clientService: ClientService) {
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
}
