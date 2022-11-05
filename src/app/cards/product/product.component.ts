import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() id: string;
  @Input() model: string;
  @Input() productionYear: string;
  @Input() gearBox: string;
  @Input() fuelType: string;
  @Input() engine: string;
  @Input() carPower: string;
  @Input() carStatus: string;
  @Input() selected: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  rent(id:string){
    this.router.navigate(['/createrent', {carId:id}]);
  }

}
