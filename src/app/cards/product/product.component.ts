import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() model: string;
  @Input() productionYear: string;
  @Input() gearBox: string;
  @Input() fuelType: string;
  @Input() engine: string;
  @Input() carPower: string;
  @Input() carStatus: string;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
